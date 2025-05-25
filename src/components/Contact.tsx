import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            I’m always open to meeting new people and exploring new roles. Got a question or just want to connect? Don’t hesitate to drop a message!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex justify-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="text-center md:text-left max-w-4xl"
  >
    {/* <h3 className="text-2xl font-semibold mb-6">Contact Information</h3> */}
    <div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-4 text-left">
      <div className="flex items-center">
        <Mail size={20} className="mr-2 text-gray-700" />
        <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-black transition-colors">
          {personalInfo.email}
        </a>
      </div>
      <div className="flex items-center">
        <MapPin size={20} className="mr-2 text-gray-700" />
        <span className="text-gray-700">{personalInfo.location}</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
          <Github size={24} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  </motion.div>
</div>


          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div> 
        </div> */}
      </div>
    </section>
  );
}
