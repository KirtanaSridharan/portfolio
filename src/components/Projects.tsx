import { Github } from "lucide-react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  // const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            View my projects here. For more projects, visit my{" "}
            <a
              href="https://github.com/KirtanaSridharan"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://public.tableau.com/app/profile/kirtana.sridharan/vizzes"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tableau
            </a>{" "}
            pages.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {/* {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        )}  */}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoLink?: string;
    githubLink: string;
    featured: boolean;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 text-left">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {/* <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 flex items-center"
          >
            <ExternalLink size={18} className="mr-1" />
            <span>Demo</span>
          </a> */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 flex items-center"
          >
            <Github size={18} className="mr-1" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
