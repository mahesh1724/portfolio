import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-10 md:px-20 py-24 flex flex-col items-center justify-center relative"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed text-center space-y-6"
      >
        <p>
          I am a <span className="text-cyan-400 font-semibold">Computer Science student specializing in Artificial Intelligence</span> 
          with a passion for building intelligent systems and modern digital experiences. 
          I enjoy exploring how technology can solve real-world problems and create meaningful impact.
        </p>

        <p>
          My interests include working with <span className="text-purple-400 font-semibold">AI, machine learning, and modern web technologies</span> 
          to develop innovative applications and scalable solutions. I love experimenting with ideas, learning new tools, 
          and continuously improving my technical skills through hands-on projects.
        </p>

        <p>
          Beyond technology, I enjoy <span className="text-cyan-400 font-semibold">traveling and exploring new places</span>. 
          Discovering different environments and perspectives inspires creativity and helps me think differently 
          when solving problems and building new ideas.
        </p>

        <p>
          My goal is to grow into a skilled <span className="text-purple-400 font-semibold">AI Engineer </span> 
           who builds technologies that push innovation forward and improve everyday life.
        </p>
      </motion.div>

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  )
}

export default About     