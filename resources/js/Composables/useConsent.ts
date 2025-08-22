// resources/js/composables/useConsent.ts
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

    // 1) Carrega assets locais renomeados (evita adblock por nome)
    await loadCss('/vendor/cc/cc.min.css?v=3.1.1')
    await loadScript('/vendor/cc/cc.min.js?v=3.1.1')

    // 2) Inicializa CMP
    // @ts-ignore
    if (!window.cookieconsent) return
    // helpers de debug: ?consent-reset=1
    const params = new URLSearchParams(location.search)
    if (params.has('consent-reset')) {
        document.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        const root = '.' + location.hostname.replace(/^www\./, '')
        document.cookie = `cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${root}`
    }

    // @ts-ignore
    window.cookieconsent.initialise({
        palette: {
            popup: { background: '#111827' },
            button: { background: '#f59e0b' }
        },
        theme: 'classic',
        type: 'opt-in',
        position: 'bottom',
        content: {
            message: 'Usamos cookies para anúncios personalizados. Você aceita?',
            allow: 'Aceitar',
            deny: 'Recusar',
            link: 'Política de Privacidade',
            href: '/politica-de-privacidade'
        },
        cookie: {
            domain: '.' + location.hostname.replace(/^www\./, ''), // cobre www e raiz
            path: '/',
            expiryDays: 365,
            secure: location.protocol === 'https:'
        },
        onInitialise(status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) maybeLoadAdsense(adsenseClientId)
        },
        onStatusChange(status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) maybeLoadAdsense(adsenseClientId)
        }
    })
}

async function maybeLoadAdsense(clientId?: string) {
    if (adsenseLoaded || !clientId) return
    await loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        'data-ad-client': clientId
    })
    adsenseLoaded = true
}

export function useConsent() {
    return { consentReady, consentGiven, initConsent }
}
