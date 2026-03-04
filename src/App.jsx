import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Intro from "./components/Intro"
import Achievements from "./components/Achievements"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"

import profile from "./assets/profile.jpg"

function App() {
const [showIntro, setShowIntro] = useState(true)

// Dynamic Browser Tab Title
useEffect(() => {
const titles = [
"Mahesh Babu ch | AI Engineer",
"Mahesh Babu ch | Web Developer",
"Mahesh Babu ch | Full Stack Developer",
"Mahesh Babu ch | Portfolio"
]

```
let index = 0

const interval = setInterval(() => {
  document.title = titles[index]
  index = (index + 1) % titles.length
}, 2000)

return () => clearInterval(interval)
```

}, [])

if (showIntro) {
return <Intro onFinish={() => setShowIntro(false)} />
}

return (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
className="bg-black text-white min-h-screen overflow-x-hidden"
> <Navbar />

```
  {/* Hero Section */}
  <section
    id="home"
    className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 md:px-20 pt-28 md:pt-32 gap-12"
  >
    
    {/* LEFT SIDE - Profile */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex justify-center"
    >
      <motion.img
        src={profile}
        alt="Mahesh Babu"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px]
        object-cover rounded-full
        border-4 border-white
        shadow-[0_0_60px_rgba(59,130,246,0.8)]"
      />
    </motion.div>

    {/* RIGHT SIDE - Details */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Mahesh Babu
      </h1>

      <TypeAnimation
        sequence={[
          "AI Engineer",
          1500,
          "Web Developer",
          1500,
          "Full Stack Developer",
          1500,
          "Traveller",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-lg sm:text-xl md:text-2xl text-blue-400 block mb-6"
      />

      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        Passionate Computer Science student specializing in Artificial
        Intelligence and Machine Learning. Building experience in
        real-time AI systems, deep learning models, and modern web
        applications. Strong interest in solving real-world problems
        using scalable and impactful technology solutions.
      </p>

      <p className="text-gray-400 text-sm sm:text-base mb-8">
        🚀 Currently working on fake currency detector with application <br />
        💡 Exploring new technologies <br />
        🎯 Goal: Build innovative products that create real impact
      </p>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-gray-600 hover:bg-gray-700 px-6 sm:px-8 py-3 rounded-xl
        text-sm sm:text-lg transition shadow-lg hover:shadow-gray-500/40"
      >
        Download Resume
      </motion.a>
    </motion.div>

  </section>

  <About />
  <Skills />
  <Projects />
  <Achievements />
  <Contact />
  <Footer />

  {/* Vercel Analytics */}
  <Analytics />
</motion.div>

)
}

export default App
