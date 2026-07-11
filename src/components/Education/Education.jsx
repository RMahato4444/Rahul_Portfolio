import "./Education.css";
import { education } from "../../data/education";
import { motion } from "framer-motion";
function Education() {
  return (
    <motion.section
id = "education"
className="education"
initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

transition={{duration:.8}}
>
      <div className="container">

        <h2 className="section-title">
          My <span className="highlight">Education</span>
        </h2>

        <div className="timeline">

          {education.map((item) => (

            <div className="timeline-item" key={item.id}>

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <span>{item.duration}</span>

                <p>{item.score}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Education;