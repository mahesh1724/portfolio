import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Art Generator",
    desc: "A web-based AI image generator capable of generating artworks in 20+ styles such as anime, watercolor, cubism and surrealism.",
    tech: ["Python", "React", "Stable Diffusion"],
  },
  {
    title: "Online Student Grading System",
    desc: "Built a scalable student grading system using Django/Flask and React for a smooth user experience. Optimized PostgreSQL queries, reducing grade retrieval time from 3 seconds to under 1 second.",
    tech: ["HTML", "CSS", "PostgreSQL", "Python", "REST APIs"],
  },
  {
    title: "Face Recognition for Attendance",
    desc: "Developed a real-time face recognition attendance system using Python, OpenCV and machine learning techniques. Integrated live camera functionality for seamless detection and recognition.",
    tech: ["Python", "Flask/Django", "Scikit-Learn", "OpenCV", "Face Recognition"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 sm:px-10 md:px-20 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 md:mb-20"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
            }}
            className="relative p-6 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl cursor-pointer"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
            from-purple-500/20 via-blue-500/20 to-cyan-500/20 
            blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 relative z-10">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base mb-6 relative z-10">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm bg-zinc-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}