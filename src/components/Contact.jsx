import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

function Contact() {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus("sending")

    emailjs.send(
      "service_i4m5hp1",
      "template_il29hnd",
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      "-6LlTQP2Cl8gqo84L"
    )
    .then(() => {
      setStatus("success")
      setForm({ name:"", email:"", message:"" })

      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    })
    .catch(() => {
      setStatus("error")
    })
  }

  return (
    <section
      id="Contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-10 md:px-20 py-20"
    >

      {/* CENTER THANK YOU POPUP */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity:0, scale:0.7 }}
            animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0, scale:0.7 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          >
            <div className="bg-zinc-900 px-10 py-8 rounded-2xl text-center shadow-xl">

              <h3 className="text-2xl font-semibold mb-2">
                Thank You!
              </h3>

              <p className="text-gray-400 text-sm">
                Your message has been sent successfully.
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">

        {/* LEFT CONTACT INFO */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Feel free to contact me for AI projects,
            collaborations, or opportunities.
          </p>

          <p className="text-sm sm:text-base mb-2">
            Email: maheshch2708@gmail.com
          </p>

          <p className="text-sm sm:text-base">
            Location: Andhra Pradesh, India
          </p>

        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-7 max-w-sm w-full"
        >

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-sm"
            />

            <textarea
              name="message"
              rows="3"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-sm"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              className="relative w-full py-2.5 rounded-lg
              bg-purple-600 text-white font-semibold
              overflow-hidden transition-all duration-300
              shadow-lg hover:shadow-purple-500/50"
            >
              <span className="absolute inset-0 rounded-lg bg-purple-400 opacity-0 hover:opacity-20 animate-pulse"></span>

              <span className="relative z-10">
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>
            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact  