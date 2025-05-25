import { skills } from "../data/personalInfo";
import { motion } from "framer-motion";
import { Category, Skill } from "../models";

export default function Skills() {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc: { [key: string]: Skill[] }, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  const categories: Category = {
    frontend: "Frontend",
    backend: "Backend",
    datascience: "Data Science & ML",
    tools: "Tools & Deployment",
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(skillsByCategory).map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">
                {categories[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
