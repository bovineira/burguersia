import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsappGroup, WPP_WEB_URL } from '../lib/whatsappDeepLink'

function ComunidadeWpp() {
  const [shake, setShake] = useState(false)

  useEffect(() => {
    document.title = 'Burguersia - Comunidade no WhatsApp'
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Comunidade WhatsApp - Burguersia',
        currency: 'BRL',
      })
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Comunidade WhatsApp - Burguersia',
        currency: 'BRL',
      })
    }
    openWhatsappGroup()
  }

  return (
    <div className="min-h-screen w-full bg-black">
      {/* A arte tem proporção 768x1376: a altura mínima garante que o hambúrguer apareça inteiro */}
      <div
        className="relative mx-auto w-full max-w-[480px] overflow-hidden bg-black"
        style={{
          minHeight: 'max(100svh, min(179vw + 110px, 970px))',
          backgroundImage: "url('/images/background-comunidade.webp')",
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Faixa amarela superior, assinatura de cor da marca */}
        <div className="h-2 w-full bg-[#FFC72C]" />

        <div className="relative z-10 flex flex-col items-center px-6 pt-3 text-center">
          <motion.img
            src="/images/LOGO-PNG-QUALIDADE.png"
            alt="Burguersia"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="h-14 w-14 object-contain"
          />

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 rounded-full bg-[#FFC72C] px-4 py-0.5 font-bebas text-base tracking-[0.18em] text-black"
          >
            100% GRATUITA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 font-anton text-[2.5rem] uppercase leading-[0.95] tracking-wide text-white"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            ENTRE NA <span className="text-[#FFC72C]">COMUNIDADE</span> DO BURGUERSIA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 max-w-xs text-sm font-semibold leading-snug text-gray-200"
          >
            Cupons, promoções relâmpago e novidades do cardápio em primeira mão, direto no seu WhatsApp.
          </motion.h2>

          <motion.a
            href={WPP_WEB_URL}
            onClick={handleClick}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 160, damping: 16 }}
            whileTap={{ y: 5, boxShadow: '0 0 0 #000' }}
            className={`sheen-effect group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border-4 border-black bg-[#FFC72C] px-6 py-4 font-anton text-2xl uppercase tracking-wide text-black shadow-[0_7px_0_#000,0_0_28px_rgba(255,199,44,0.35)] ${
              shake ? 'animate-shake' : ''
            }`}
          >
            <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
            ENTRAR NA COMUNIDADE
          </motion.a>

        </div>
      </div>
    </div>
  )
}

export default ComunidadeWpp
