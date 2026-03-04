import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "60%" : "80%",
        }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-between px-6 md:px-10 py-3 md:py-4 rounded-full 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r 
        from-transparent via-white/10 to-transparent pointer-events-none" />

        {/* Logo */}
        <motion.div
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          animate={{ rotate: isHover ? 360 : 0 }}
          transition={{
            rotate: isHover
              ? { repeat: Infinity, ease: "linear", duration: 0.8 }
              : { type: "spring", stiffness: 50, damping: 15 },
          }}
          className="relative z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center 
          rounded-full text-white font-bold text-lg shadow-lg cursor-pointer"
        >
          MB
        </motion.div>

        {/* Desktop Links */}
        <div className="relative z-10 hidden md:flex gap-10 text-white">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-10"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[90%] bg-black/90 backdrop-blur-xl 
          border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-6 text-white md:hidden"
        >
          <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
          <a onClick={()=>setMenuOpen(false)} href="#about">About</a>
          <a onClick={()=>setMenuOpen(false)} href="#skills">Skills</a>
          <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
          <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar