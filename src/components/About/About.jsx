import "./About.css";
import { FaCode, FaLaptopCode, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
id = "about"
className="about"
initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

transition={{duration:.8}}
>
      <div className="container">

        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>

        <p className="about-text">
          I am Rahul Mahato, a B.Tech Information Technology undergraduate
          passionate about software development and problem solving.
          I enjoy building responsive web applications while strengthening my
          knowledge in Data Structures & Algorithms, DBMS and Computer Networks.
          My goal is to become a skilled Software Engineer by continuously
          learning new technologies and building real-world projects.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <FaLaptopCode className="about-icon" />
            <h3>Web Development</h3>
            <p>Responsive websites using HTML, CSS and JavaScript.</p>
          </div>

          <div className="about-card">
            <FaCode className="about-icon" />
            <h3>Programming</h3>
            <p>C, C++, Python and JavaScript with strong problem-solving skills.</p>
          </div>

          <div className="about-card">
            <FaGraduationCap className="about-icon" />
            <h3>Education</h3>
            <p>B.Tech Information Technology (2023–2027).</p>
          </div>

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>Always Learning</h3>
            <p>Exploring modern technologies and improving every day.</p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;