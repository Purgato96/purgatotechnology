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

// self-host primeiro (evita adblock), cdns como fallback
const CSS_CANDIDATES = [
    '/vendor/cc/cc.min.css?v=3.1.1',
    'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.1/cookieconsent.min.css',
    'https://unpkg.com/cookieconsent@3/build/cookieconsent.min.css',
]
const JS_CANDIDATES = [
    '/vendor/cc/cc.min.js?v=3.1.1',
    'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.1/cookieconsent.min.js',
    'https://unpkg.com/cookieconsent@3/build/cookieconsent.min.js',
]

async function loadFirstAvailable(loadFn: (url: string) => Promise<void>, urls: string[]) {
    let lastErr: unknown = null
    for (const url of urls) {
        try { await loadFn(url); return true } catch (e) { lastErr = e }
    }
    throw lastErr ?? new Error('Nenhuma fonte disponível')
}

function deleteConsentCookie() {
    const base = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    document.cookie = base
    const root = '.' + location.hostname.replace(/^www\./, '')
    document.cookie = `cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${root}`
}

function forceShowBanner() {
    const el = document.querySelector('.cc-window') as HTMLElement | null
    if (!el) return false
    // força exibição mesmo contra regras cosméticas com !important
    el.style.setProperty('display', 'block', 'important')
    el.style.setProperty('opacity', '1', 'important')
    el.style.setProperty('visibility', 'visible', 'important')
    el.style.setProperty('z-index', '2147483647', 'important')
    return true
}

function renderMinimalFallback(adsenseClientId?: string) {
    // fallback simples caso o adblock esconda a .cc-window
    const wrap = document.createElement('div')
    wrap.id = 'pf-consent-fallback'
    wrap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483647;background:#111827;color:#fff;padding:12px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between;font:14px system-ui,-apple-system,Segoe UI,Roboto;'
    wrap.innerHTML = `
    <div style="max-width:70ch;line-height:1.4">Usamos cookies para anúncios personalizados. Você aceita?</div>
    <div style="display:flex;gap:8px">
      <button id="pf-consent-allow" style="background:#f59e0b;border:0;border-radius:6px;padding:8px 12px;cursor:pointer">Aceitar</button>
      <button id="pf-consent-deny"  style="background:#374151;color:#fff;border:0;border-radius:6px;padding:8px 12px;cursor:pointer">Recusar</button>
    </div>`
    document.body.appendChild(wrap)

    const root = '.' + location.hostname.replace(/^www\./, '')
    const set = (val: 'allow'|'deny') => {
        document.cookie = `cookieconsent_status=${val}; max-age=${60*60*24*365}; path=/; domain=${root}`
        document.cookie = `cookieconsent_status=${val}; max-age=${60*60*24*365}; path=/`
        if (val === 'allow') maybeLoadAdsense(adsenseClientId)
        wrap.remove()
    }
    wrap.querySelector<HTMLButtonElement>('#pf-consent-allow')?.addEventListener('click', () => set('allow'))
    wrap.querySelector<HTMLButtonElement>('#pf-consent-deny') ?.addEventListener('click', () => set('deny'))
}

async function initConsent(adsenseClientId?: string) {
    if (initialised) return
    initialised = true

    // helpers via URL: ?consent-reset=1 & ?consent-debug=1
    const params = new URLSearchParams(location.search)
    if (params.has('consent-reset')) deleteConsentCookie()
    const FORCE_OPEN = params.has('consent-debug')

    try {
        await loadFirstAvailable(loadCss, CSS_CANDIDATES)
        await loadFirstAvailable((u) => loadScript(u), JS_CANDIDATES)
        // @ts-ignore
        if (!window.cookieconsent) { renderMinimalFallback(adsenseClientId); return }
    } catch {
        renderMinimalFallback(adsenseClientId)
        return
    }

    // @ts-ignore
    window.cookieconsent.initialise({
        palette: { popup: { background: '#111827' }, button: { background: '#f59e0b' } },
        theme: 'classic',
        type: 'opt-in',
        position: 'bottom',
        content: {
            message: 'Usamos cookies para anúncios personalizados. Você aceita?',
            allow: 'Aceitar', deny: 'Recusar',
            link: 'Política de Privacidade', href: '/politica-de-privacidade'
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
            if (allowed) { maybeLoadAdsense(adsenseClientId); window.dispatchEvent(new Event('consent:allow')) }
            if (FORCE_OPEN) { /* @ts-ignore */ window.cookieconsent.open() }
            // dá 1s pro adblock injetar css e então forçamos
            setTimeout(() => forceShowBanner() || renderMinimalFallback(adsenseClientId), 1000)
        },
        onStatusChange(status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) { maybeLoadAdsense(adsenseClientId); window.dispatchEvent(new Event('consent:allow')) }
            else { window.dispatchEvent(new Event('consent:deny')) }
        }
    })

    // segurança extra: se não criou o elemento, injeta fallback
    setTimeout(() => {
        const el = document.querySelector('.cc-window') as HTMLElement | null
        if (!el) renderMinimalFallback(adsenseClientId)
    }, 1500)
}

async function maybeLoadAdsense(clientId?: string) {
    if (adsenseLoaded || !clientId) return
    try {
        await loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { 'data-ad-client': clientId })
        adsenseLoaded = true
    } catch (e) {
        console.error('[consent] falha ao carregar AdSense:', e)
    }
}

export function useConsent() {
    return { consentReady, consentGiven, initConsent }
}
