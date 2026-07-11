import "./Projects.css";
import { projects } from "../../data/projects";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">

        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>

        <div className="project-wrapper">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              className="project-card"

              whileHover={{
                y: -10
              }}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                {project.featured && (
                  <span className="featured">
                    Featured
                  </span>
                )}

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">

                  {project.technologies.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;