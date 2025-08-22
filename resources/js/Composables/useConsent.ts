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

// Tenta local -> cdnjs -> unpkg -> jsdelivr
const CSS_CANDIDATES = [
    '/vendor/cc/cc.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.1/cookieconsent.min.css',
    'https://unpkg.com/cookieconsent@3/build/cookieconsent.min.css',
    'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css',
]

const JS_CANDIDATES = [
    '/vendor/cc/cc.min.js', // <- self-host RENOMEADO
    'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.1/cookieconsent.min.js',
    'https://unpkg.com/cookieconsent@3/build/cookieconsent.min.js',
    'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js',
]

async function loadFirstAvailable(loadFn: (url: string) => Promise<void>, urls: string[]) {
    let lastErr: unknown = null
    for (const url of urls) {
        try {
            await loadFn(url)
            return true
        } catch (e) {
            lastErr = e
            // tenta o próximo
        }
    }
    throw lastErr ?? new Error('Nenhuma fonte disponível')
}

async function initConsent(adsenseClientId?: string) {
    if (initialised) return
    initialised = true

    try {
        await loadFirstAvailable(loadCss, CSS_CANDIDATES)
        await loadFirstAvailable((u) => loadScript(u), JS_CANDIDATES)
        // @ts-ignore
        if (!window.cookieconsent) {
            console.warn('[consent] cookieconsent indisponível após load.')
            return
        }
    } catch (e) {
        console.error('[consent] Falha ao carregar lib de consentimento:', e)
        // Fallback opcional: mostrar um banner minimalista seu (ver extra abaixo)
        return
    }

    // @ts-ignore
    window.cookieconsent.initialise({
        palette: {
            popup: { background: '#111827' },
            button: { background: '#f59e0b' }
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
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) {
                maybeLoadAdsense(adsenseClientId)
                window.dispatchEvent(new Event('consent:allow'))
            }
        },
        onStatusChange: function (status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) {
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
    try {
        await loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
            'data-ad-client': clientId
        })
        adsenseLoaded = true
    } catch (e) {
        console.error('[consent] Falha ao carregar AdSense:', e)
    }
}

export function useConsent() {
    return {
        consentReady,
        consentGiven,
        initConsent,
    }
}
