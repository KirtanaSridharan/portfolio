import { personalInfo, experience } from '../data/personalInfo';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{personalInfo.about}</p>
            <p className="text-lg text-gray-700">
              Based in {personalInfo.location}, I enjoy creating solutions that are not only functional but also intuitive and visually appealing.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-gray-600 mb-1">{exp.company} | {exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
