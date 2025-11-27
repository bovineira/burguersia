import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import './index.css'

function App() {
  const [shake, setShake] = useState(false)

  // Shake button every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-black">
      {/* Background Image with Strong Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2099&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay escuro FORTE para contraste */}
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Decorative Blur Elements (Background) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-10 top-20 z-0 h-32 w-32 rounded-full bg-neon-red/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 z-0 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
      />

      {/* Content Container - FLEXBOX VERTICAL COM GAP */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12">
        
        {/* 1. HEADLINE - Black Friday */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-anton text-7xl font-black uppercase leading-none tracking-wider text-neon-red sm:text-8xl md:text-9xl"
          style={{
            textShadow: '0 0 20px rgba(255, 0, 64, 0.6), 0 0 40px rgba(255, 0, 64, 0.4)',
            filter: 'drop-shadow(0 0 8px rgba(255, 0, 64, 0.5))'
          }}
        >
          BLACK
          <br />
          FRIDAY
        </motion.h1>

        {/* 2. SUB-HEADLINE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-bebas text-2xl tracking-[0.3em] text-white sm:text-3xl md:text-4xl"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
          }}
        >
          2 HAMBÚRGUERES POR:
        </motion.h2>

        {/* 3. PREÇO - Protagonista com Glow Reduzido */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.4,
          }}
          className="flex items-start gap-2"
        >
          <motion.span
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-6 font-anton text-4xl font-bold text-gold sm:mt-8 sm:text-5xl md:text-6xl"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))'
            }}
          >
            R$
          </motion.span>
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="font-anton text-8xl font-black leading-none text-gold sm:text-9xl md:text-[10rem] lg:text-[12rem]"
            style={{
              textShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 4px 20px rgba(0, 0, 0, 0.8)',
              filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))'
            }}
          >
            49,90
          </motion.div>
        </motion.div>

        {/* 4. BOTÃO CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 w-full max-w-md px-4"
        >
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={`sheen-effect group relative flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 font-bebas text-2xl font-bold uppercase tracking-wide text-black shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/50 sm:py-6 sm:text-3xl md:text-4xl ${
              shake ? 'animate-shake' : ''
            }`}
            style={{
              boxShadow: '0 10px 40px rgba(255, 215, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)'
            }}
          >
            <ShoppingBag className="h-7 w-7 transition-transform group-hover:scale-110 sm:h-9 sm:w-9" />
            ABRIR IFOOD
          </a>
        </motion.div>

        {/* 5. FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-2 text-center text-xs text-gray-400 sm:text-sm"
        >
          Oferta válida enquanto durarem os estoques.
        </motion.p>
      </div>
    </div>
  )
}

export default App


