import { motion } from "framer-motion"
import { FaPython, FaGlobe } from "react-icons/fa"
import { SiDjango, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si"
import { GiArtificialIntelligence } from "react-icons/gi"

const skills = [
  { name: "Python", icon: <FaPython size={36} className="text-yellow-300" /> },
  { name: "Web Development", icon: <FaGlobe size={36} className="text-blue-400" /> },
  { name: "Django", icon: <SiDjango size={36} className="text-green-500" /> },
  { name: "AI / ML", icon: <GiArtificialIntelligence size={36} className="text-purple-400" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={36} className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch size={36} className="text-red-500" /> },
  { name: "OpenCV", icon: <SiOpencv size={36} className="text-sky-400" /> },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 sm:px-10 md:px-20 py-20"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-120px" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 md:mb-20"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-120px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto place-items-center"
      >

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center gap-3 md:gap-4"
          >

            {/* Hover animation */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
              rounded-full bg-zinc-900 border border-zinc-700 
              flex items-center justify-center shadow-xl cursor-pointer transform-gpu"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r 
              from-purple-500/20 via-blue-500/20 to-cyan-500/20 
              blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {skill.icon}
              </div>

            </motion.div>

            <p className="text-white text-sm sm:text-base md:text-lg">
              {skill.name}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </section>
  )
}