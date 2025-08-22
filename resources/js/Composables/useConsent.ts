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

async function maybeLoadAdsense(clientId?: string) {
    if (adsenseLoaded || !clientId) return
    await loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
        'data-ad-client': clientId
    })
    adsenseLoaded = true
}

function cookieRootDomain() {
    return '.' + location.hostname.replace(/^www\./, '')
}

function deleteConsentCookie() {
    const base = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    document.cookie = base
    document.cookie = `${base}; domain=${cookieRootDomain()}`
}

function renderMinimalFallback(adsenseClientId?: string) {
    if (document.getElementById('pf-consent-fallback')) return

    const wrap = document.createElement('div')
    wrap.id = 'pf-consent-fallback'
    wrap.setAttribute('role', 'dialog')
    wrap.setAttribute('aria-live', 'polite')
    wrap.style.cssText = [
        'position:fixed','left:0','right:0','bottom:0','z-index:2147483647',
        'background:#111827','color:#fff','padding:12px 16px',
        'display:flex','gap:12px','align-items:center','justify-content:space-between',
        'font:14px system-ui,-apple-system,Segoe UI,Roboto'
    ].join(';')

    wrap.innerHTML = `
    <div style="max-width:70ch;line-height:1.4">
      Usamos cookies para anúncios personalizados. Você aceita?
      <a href="/politica-de-privacidade" style="text-decoration:underline;color:#93c5fd">Política de Privacidade</a>
    </div>
    <div style="display:flex;gap:8px">
      <button id="pf-consent-allow" style="background:#f59e0b;border:0;border-radius:6px;padding:8px 12px;cursor:pointer">Aceitar</button>
      <button id="pf-consent-deny"  style="background:#374151;color:#fff;border:0;border-radius:6px;padding:8px 12px;cursor:pointer">Recusar</button>
    </div>
  `
    document.body.appendChild(wrap)

    const set = (val: 'allow'|'deny') => {
        const cookie = `cookieconsent_status=${val}; max-age=${60*60*24*365}; path=/`
        document.cookie = cookie
        document.cookie = `${cookie}; domain=${cookieRootDomain()}`
        if (val === 'allow') maybeLoadAdsense(adsenseClientId)
        wrap.remove()
    }

    wrap.querySelector<HTMLButtonElement>('#pf-consent-allow')?.addEventListener('click', () => set('allow'))
    wrap.querySelector<HTMLButtonElement>('#pf-consent-deny') ?.addEventListener('click', () => set('deny'))
}

async function initConsent(adsenseClientId?: string) {
    if (initialised) return
    initialised = true

    // reset opcional via URL
    const params = new URLSearchParams(location.search)
    if (params.has('consent-reset')) deleteConsentCookie()

    // 1) Carrega assets locais (renomeados p/ evitar bloqueio por nome)
    await loadCss('/vendor/cc/cc.min.css?v=3.1.1')
    await loadScript('/vendor/cc/cc.min.js?v=3.1.1')

    // 2) Inicializa CMP
    // @ts-ignore
    if (!window.cookieconsent) { renderMinimalFallback(adsenseClientId); return }

    // @ts-ignore
    window.cookieconsent.initialise({
        palette: { popup: { background: '#111827' }, button: { background: '#f59e0b' } },
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
            domain: cookieRootDomain(),
            path: '/',
            expiryDays: 365,
            secure: location.protocol === 'https:'
        },
        onInitialise(status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) maybeLoadAdsense(adsenseClientId)
            // Se a CMP foi escondida por extensão, cai no fallback
            setTimeout(() => {
                const el = document.querySelector('.cc-window') as HTMLElement | null
                const hidden = !el || getComputedStyle(el).display === 'none' || el.offsetHeight === 0
                if (hidden) renderMinimalFallback(adsenseClientId)
            }, 600)
        },
        onStatusChange(status: string) {
            consentReady.value = true
            const allowed = status === 'allow'
            consentGiven.value = allowed
            if (allowed) maybeLoadAdsense(adsenseClientId)
        }
    })
}

export function useConsent() {
    return { consentReady, consentGiven, initConsent }
}
