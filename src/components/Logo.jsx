import { motion } from "framer-motion"

function Logo() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-2xl font-bold flex items-center"
    >
      <motion.span
        animate={{
          textShadow: [
            "0px 0px 5px #3b82f6",
            "0px 0px 20px #3b82f6",
            "0px 0px 5px #3b82f6",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="text-blue-500"
      >
        M
      </motion.span>

      <motion.span
        animate={{
          textShadow: [
            "0px 0px 5px #ffffff",
            "0px 0px 15px #ffffff",
            "0px 0px 5px #ffffff",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.3,
        }}
        className="text-white"
      >
        B
      </motion.span>
    </motion.div>
  )
}

export default Logo