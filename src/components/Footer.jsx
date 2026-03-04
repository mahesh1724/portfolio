import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"
import VisitorCount from "./VisitorCount"

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 sm:px-10 md:px-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Mahesh Babu. All Rights Reserved.
        </p>

        <VisitorCount />

        {/* Social Media Links */}
        <div className="flex gap-6 text-xl">

          <a
            href="https://instagram.com/_mr.mahesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/maheshbabuch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/mahee.chennamsetti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          

        </div>

      </div>
      

    </footer>
  )
}

export default Footer