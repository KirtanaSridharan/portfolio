import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg order-1 md:order-2 mx-auto md:mx-0"
          >
            <img
              src="https://mocha-cdn.com/0196f87f-b9c9-7e8e-891a-0836394702b3/WhatsApp-Image-2025-05-25-at-17.43..jpeg"
              alt={`${personalInfo.name} professional headshot`}
              className="w-auto h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a
          href="#about"
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
