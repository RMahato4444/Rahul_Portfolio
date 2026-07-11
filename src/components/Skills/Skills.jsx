import "./Skills.css";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title">
          Technical <span className="highlight">Skills</span>
        </h2>

        <div className="skills-wrapper">
          {skills.map((category) => (
            <div className="skill-box" key={category.title}>
              <h3>{category.title}</h3>

              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-header">
                      <div className="skill-name">
                        <Icon className="skill-icon" />
                        <span>{skill.name}</span>
                      </div>

                      <span>{skill.level}%</span>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;