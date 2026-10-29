const WPP_CODE = 'HDBj5pW4qgs8m6nzv4CMnB'
export const WPP_WEB_URL = `https://chat.whatsapp.com/${WPP_CODE}?mode=gi_t`

const ua = () => (typeof navigator !== 'undefined' ? navigator.userAgent : '')
const isAndroid = () => /Android/i.test(ua())
const isIOS = () => /iPhone|iPad|iPod/i.test(ua())

// Android: intent:// força abrir o app mesmo dentro do navegador do Instagram,
// e cai no link web se o app não estiver instalado.
const androidIntent = () =>
  `intent://chat?code=${WPP_CODE}#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=${encodeURIComponent(
    WPP_WEB_URL
  )};end`

// iOS: tenta o esquema nativo; se a página continuar visível após um tempo, abre o link web.
function openIOS() {
  let left = false
  const onHide = () => {
    if (document.hidden) left = true
  }
  document.addEventListener('visibilitychange', onHide)
  window.location.href = `whatsapp://chat?code=${WPP_CODE}`
  setTimeout(() => {
    document.removeEventListener('visibilitychange', onHide)
    if (!left) window.location.href = WPP_WEB_URL
  }, 1600)
}

export function openWhatsappGroup() {
  if (isAndroid()) window.location.href = androidIntent()
  else if (isIOS()) openIOS()
  else window.open(WPP_WEB_URL, '_blank', 'noopener,noreferrer')
}
