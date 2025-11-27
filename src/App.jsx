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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2099&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        
        {/* HEADLINE - Black Friday Neon */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center font-anton text-7xl font-black uppercase leading-none tracking-wider text-neon-red neon-text animate-neon-flicker sm:text-8xl md:text-9xl"
        >
          BLACK
          <br />
          FRIDAY
        </motion.h1>

        {/* SUB-HEADLINE */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-center font-bebas text-2xl tracking-widest text-white sm:text-3xl md:text-4xl"
        >
          2 HAMBÚRGUERES POR:
        </motion.h2>

        {/* PRICE - Animated Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.5,
          }}
          className="mb-12 flex items-start"
        >
          <motion.span
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mr-2 mt-8 font-anton text-4xl font-bold text-gold sm:text-5xl"
          >
            R$
          </motion.span>
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="font-anton text-9xl font-black leading-none text-gold price-glow sm:text-[12rem] md:text-[14rem]"
          >
            49,90
          </motion.div>
        </motion.div>

        {/* CTA BUTTON - Sheen Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 w-full max-w-md px-4"
        >
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={`sheen-effect group relative flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-6 font-bebas text-3xl font-bold uppercase tracking-wide text-black shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold/50 sm:text-4xl ${
              shake ? 'animate-shake' : ''
            }`}
          >
            <ShoppingBag className="h-8 w-8 transition-transform group-hover:scale-110 sm:h-10 sm:w-10" />
            ABRIR IFOOD
          </a>
        </motion.div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-xs text-gray-400 sm:text-sm"
        >
          Oferta válida enquanto durarem os estoques.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-10 top-20 h-32 w-32 rounded-full bg-neon-red/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
        />
      </div>
    </div>
  )
}

export default App

