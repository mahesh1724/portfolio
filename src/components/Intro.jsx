import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const greetings = [
  "• Namaskar",
  "• నమస్కారం",
  "• नमस्कार",
  "• নমস্কার",
  "• ನಮಸ್ಕಾರ",
  "• வணக்கம்",
  "• നമസ്കാരം",
]

function Intro({ onFinish }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1)
      }, 700) // speed (change to 400 if you want faster)

      return () => clearTimeout(timer)
    } else {
      setTimeout(() => {
        onFinish()
      }, 900)
    }
  }, [index, onFinish])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-center">

      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-light tracking-wide text-white"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>

      <p className="mt-6 text-slate-500 text-sm tracking-widest uppercase">
        Welcome
      </p>

    </div>
  )
}

export default Intro