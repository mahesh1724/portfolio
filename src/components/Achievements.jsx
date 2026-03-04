import { motion } from "framer-motion"
import { useState } from "react"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    about:
      "Certification focused on Generative AI concepts, OCI AI services, large language models, and implementing AI-powered applications in Oracle Cloud.",
    image: "/certificates/oracle-genai.png",
    verify: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7457538574D6EA6CA30E94710CAACA928D1BB2165F8BC2013E7EC605C649AF61"
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    about:
      "Demonstrates knowledge of vector databases, similarity search, embeddings, and building AI search solutions using Oracle AI Vector Search.",
    image: "/certificates/oracle-vector.png",
    verify: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=85DDE98E7A004F27AD3C4FCE826021C87618375C2B7D788AE6AF6A0D32D1FF4A"
  },
  {
    title: "Essentials Automation Certification - 2024",
    issuer: "Automation Anywhere",
    about:
      "Covered the fundamentals of robotic process automation including automation concepts, bots, workflows, and business process automation.",
    image: "/certificates/automation-essentials.png",
    verify: "https://certificates.automationanywhere.com/5791a8d1-4455-423b-9724-53dce7af2d1c#acc.QdwMKE4H"
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    about:
      "Validates skills in developing enterprise-level Java applications using modern development practices.",
    image: "/certificates/redhat-developer.png",
    verify: "https://www.credly.com/badges/753ad74d-8a0f-446d-bc7e-c8848e13c10a/public_url"
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional (Automation 360) - 2023",
    issuer: "Automation Anywhere",
    about:
      "Focused on Automation 360 platform, bot creation, task automation, and deploying RPA solutions.",
    image: "/certificates/rpa-automation360.png",
    verify: "https://certificates.automationanywhere.com/5791a8d1-4455-423b-9724-53dce7af2d1c#acc.V07Iu9oJ"
  }
]

function Achievements() {

  const [paused, setPaused] = useState(false)

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white py-20 px-6 sm:px-10 md:px-20 overflow-hidden"
    >

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 md:mb-16">
        Achievements & Certifications
      </h2>

      <div className="overflow-hidden w-full">

        <motion.div
          animate={{ x: paused ? 0 : ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex gap-6 md:gap-8 w-max"
        >

          {[...certifications, ...certifications].map((cert, index) => (

            <div
              key={index}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="w-[240px] sm:w-[260px] md:w-[300px] bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition"
            >

              {/* Certificate Image */}
              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover cursor-pointer"
                />
              </a>

              {/* Certificate Info */}
              <div className="p-4">

                <h3 className="text-xs sm:text-sm font-semibold mb-1 break-words">
                  {cert.title}
                </h3>

                <p className="text-purple-400 text-xs mb-2">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 text-xs leading-relaxed break-words">
                  {cert.about}
                </p>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Achievements