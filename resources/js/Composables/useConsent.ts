import { ref } from 'vue'

const consentReady = ref(false)
const consentGiven = ref(false)
let initialised = false
let adsenseLoaded = false

function loadCss(href: string) {
    return new Promise<void>((resolve, reject) => {
        const el = document.createElement('link')
        el.rel = 'stylesheet'
        el.href = href
        el.onload = () => resolve()
        el.onerror = () => reject(new Error(`Failed to load CSS: ${href}`))
        document.head.appendChild(el)
    })
}

function loadScript(src: string, attrs: Record<string, string> = {}) {
    return new Promise<void>((resolve, reject) => {
        const s = document.createElement('script')
        s.src = src
        s.async = true
        Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v))
        s.onload = () => resolve()
        s.onerror = () => reject(new Error(`Failed to load JS: ${src}`))
        document.head.appendChild(s)
    })
}

async function initConsent(adsenseClientId?: string) {
    if (initialised) return
    initialised = true

    // 1) Carregar CookieConsent (leve e gratuito)
    await loadCss('https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css')
    await loadScript('https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js')

    // 2) Inicializar CMP no modo opt-in (GDPR-friendly)
    // @ts-ignore
    window.cookieconsent.initialise({
        palette: {
            popup: { background: '#111827' }, // slate-900
            button: { background: '#f59e0b' } // amber-500
        },
        theme: 'classic',
        type: 'opt-in',
        content: {
            message: 'Usamos cookies para anúncios personalizados. Você aceita?',
            allow: 'Aceitar',
            deny: 'Recusar',
            link: 'Política de Privacidade',
            href: '/politica-de-privacidade'
        },
        onInitialise: function (status: string) {
            consentReady.value = true
            if (status === 'allow') {
                consentGiven.value = true
                maybeLoadAdsense(adsenseClientId)
                window.dispatchEvent(new Event('consent:allow'))
            }
        },
        onStatusChange: function (status: string) {
            consentReady.value = true
            consentGiven.value = (status === 'allow')
            if (consentGiven.value) {
                maybeLoadAdsense(adsenseClientId)
                window.dispatchEvent(new Event('consent:allow'))
            } else {
                window.dispatchEvent(new Event('consent:deny'))
            }
        }
    })
}

async function maybeLoadAdsense(clientId?: string) {
    if (adsenseLoaded || !clientId) return
    // Carregar adsbygoogle **só** depois de consentir
    await loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        'data-ad-client': clientId
    })
    adsenseLoaded = true
}

export function useConsent() {
    return {
        consentReady,
        consentGiven,
        initConsent,
    }
}
