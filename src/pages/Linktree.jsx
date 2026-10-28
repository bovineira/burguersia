import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Bike, MessageCircle, ChevronRight } from 'lucide-react'

const CARDAPIO_URL = 'https://app.cardapioweb.com/burguersia'

const IFOOD_ID = '4d668828-5329-4c5c-9e89-3feb60e8a238'
const IFOOD_WEB_URL =
  'https://www.ifood.com.br/delivery/lauro-de-freitas-ba/burguersia-jardim-aeroporto/' + IFOOD_ID

const WPP_CODE = 'HDBj5pW4qgs8m6nzv4CMnB'
const WPP_WEB_URL = `https://chat.whatsapp.com/${WPP_CODE}?mode=gi_t`

const ua = () => (typeof navigator !== 'undefined' ? navigator.userAgent : '')
const isAndroid = () => /Android/i.test(ua())
const isIOS = () => /iPhone|iPad|iPod/i.test(ua())

// Android: intent:// força abrir o app mesmo dentro do navegador do Instagram,
// e cai no link web se o app não estiver instalado.
const androidIntent = (path, scheme, pkg, fallback) =>
  `intent://${path}#Intent;scheme=${scheme};package=${pkg};S.browser_fallback_url=${encodeURIComponent(fallback)};end`

// iOS: tenta o esquema nativo; se a página continuar visível após um tempo, abre o link web.
function openIOS(nativeUrl, webUrl) {
  let left = false
  const onHide = () => {
    if (document.hidden) left = true
  }
  document.addEventListener('visibilitychange', onHide)
  window.location.href = nativeUrl
  setTimeout(() => {
    document.removeEventListener('visibilitychange', onHide)
    if (!left) window.location.href = webUrl
  }, 1600)
}

function openIfood() {
  if (isAndroid()) {
    window.location.href = androidIntent(
      `restaurant/${IFOOD_ID}`,
      'ifood',
      'br.com.brainweb.ifood',
      IFOOD_WEB_URL
    )
  } else if (isIOS()) {
    openIOS(`ifood://restaurant/${IFOOD_ID}`, IFOOD_WEB_URL)
  } else {
    window.open(IFOOD_WEB_URL, '_blank', 'noopener,noreferrer')
  }
}

function openWhatsapp() {
  if (isAndroid()) {
    window.location.href = androidIntent(
      `chat?code=${WPP_CODE}`,
      'whatsapp',
      'com.whatsapp',
      WPP_WEB_URL
    )
  } else if (isIOS()) {
    openIOS(`whatsapp://chat?code=${WPP_CODE}`, WPP_WEB_URL)
  } else {
    window.open(WPP_WEB_URL, '_blank', 'noopener,noreferrer')
  }
}

const track = (event, name) => {
  if (window.fbq) window.fbq('track', event, { content_name: name, currency: 'BRL' })
}

const BUTTONS = [
  {
    key: 'cardapio',
    label: 'ACESSAR CARDÁPIO',
    sub: 'Peça direto, sem taxa de app',
    Icon: UtensilsCrossed,
    variant: 'primary',
    href: CARDAPIO_URL,
    onClick: () => track('Subscribe', 'Linktree - Cardápio'),
  },
  {
    key: 'ifood',
    label: 'ACESSAR IFOOD',
    sub: 'Abre direto no app do iFood',
    Icon: Bike,
    variant: 'dark',
    href: IFOOD_WEB_URL,
    onClick: (e) => {
      e.preventDefault()
      track('Subscribe', 'Linktree - iFood')
      openIfood()
    },
  },
  {
    key: 'wpp',
    label: 'COMUNIDADE NO WPP',
    sub: 'Cupons e promos em 1ª mão',
    Icon: MessageCircle,
    variant: 'dark',
    href: WPP_WEB_URL,
    onClick: (e) => {
      e.preventDefault()
      track('Lead', 'Linktree - Comunidade WhatsApp')
      openWhatsapp()
    },
  },
]

// Fallback caso /images/logo.png não exista: "B" de cartola em SVG
function LogoFallback() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-label="Burguersia">
      <rect x="30" y="8" width="40" height="22" rx="3" fill="#0a0a0a" />
      <rect x="22" y="28" width="56" height="7" rx="3.5" fill="#0a0a0a" />
      <path
        d="M30 42h24c12 0 19 6 19 15 0 6-3 10-8 12 7 2 11 7 11 14 0 10-8 16-21 16H30z M46 54v10h7c4 0 6-2 6-5s-2-5-6-5z M46 76v11h9c5 0 8-2 8-5.500S60 76 55 76z"
        fill="#0a0a0a"
        fillRule="evenodd"
      />
    </svg>
  )
}

function Linktree() {
  const [logoOk, setLogoOk] = useState(true)

  useEffect(() => {
    document.title = 'Burguersia - Links'
    track('ViewContent', 'Linktree - Burguersia')
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-black text-white">
      {/* Fundo: listras diagonais amarelas tipo embalagem de fast food */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #FFC72C 0 14px, transparent 14px 44px)',
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#FFC72C] opacity-25 blur-[110px]" />

      {/* Topo amarelo com curva (arco estilo fast food) */}
      <div className="relative z-10 bg-[#FFC72C] pb-20 pt-8">
        <div
          className="absolute inset-x-0 -bottom-px h-12 bg-deep-black"
          style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}
        />
        <div className="mx-auto flex max-w-md flex-col items-center px-5">
          <motion.div
            initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
            className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-[5px] border-black bg-[#FFC72C] p-3 shadow-[0_8px_0_#000]"
          >
            {logoOk ? (
              <img
                src="/images/logo.png"
                alt="Burguersia"
                className="h-full w-full object-contain"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <LogoFallback />
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 font-anton text-5xl uppercase leading-none tracking-wide text-black"
          >
            Burguersia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-2 rounded-full bg-black px-4 py-1 font-bebas text-base tracking-[0.12em] text-[#FFC72C]"
          >
            DELIVERY · BURGER DE VERDADE
          </motion.p>
        </div>
      </div>

      {/* Botões */}
      <main className="relative z-20 mx-auto -mt-6 flex max-w-md flex-col gap-4 px-5 pb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center font-bebas text-2xl tracking-[0.25em] text-white"
        >
          ESCOLHA COMO PEDIR
        </motion.p>

        {BUTTONS.map(({ key, label, sub, Icon, variant, href, onClick }, i) => {
          const primary = variant === 'primary'
          return (
            <motion.a
              key={key}
              href={href}
              onClick={onClick}
              {...(key === 'cardapio' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, type: 'spring', stiffness: 160, damping: 16 }}
              whileTap={{ y: 5, boxShadow: '0 0px 0 #000' }}
              className={`group flex items-center gap-4 rounded-2xl border-4 border-black px-4 py-4 shadow-[0_7px_0_#000] transition-transform hover:-translate-y-0.5 ${
                primary
                  ? 'sheen-effect bg-[#FFC72C] text-black'
                  : 'bg-[#1c1c1c] text-white ring-2 ring-[#FFC72C]/70'
              }`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-4 border-black ${
                  primary ? 'bg-black text-[#FFC72C]' : 'bg-[#FFC72C] text-black'
                }`}
              >
                <Icon className="h-7 w-7" strokeWidth={2.5} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="whitespace-nowrap font-anton text-xl uppercase leading-tight tracking-wide">
                  {label}
                </span>
                <span
                  className={`text-xs font-semibold ${primary ? 'text-black/70' : 'text-[#FFC72C]'}`}
                >
                  {sub}
                </span>
              </span>
              <ChevronRight
                className="h-7 w-7 shrink-0 transition-transform group-hover:translate-x-1"
                strokeWidth={3}
              />
            </motion.a>
          )
        })}

        <p className="mt-4 text-center text-xs text-gray-500">
          Lauro de Freitas · BA · Jardim Aeroporto
        </p>
      </main>
    </div>
  )
}

export default Linktree
