import "./Hero.css";
import profile from "../../assets/images/profile.png";

import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-left">
        <span className="hero-tag">👋 Welcome to my portfolio</span>

        <h1>
          Rahul <span>Mahato</span>
        </h1>

        <TypeAnimation
          sequence={[
            "B.Tech IT Student",
            2000,
            "Frontend Developer",
            2000,
            "Problem Solver",
            2000,
            "Tech Enthusiast",
            2000,
            "Quick Learner",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Passionate about creating responsive web applications while
          strengthening my knowledge in Data Structures, Algorithms, DBMS and
          Computer Networks.
        </p>

        <div className="hero-buttons">
          <a
            href="https://docs.google.com/document/d/1XmVD6yTZ4rsKS2AUkxl11dYr7MiflA89/edit?usp=drive_link&ouid=106335362561112669026&rtpof=true&sd=true"
            className="btn"
          >
            <FaDownload />
            Resume
          </a>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={1200}
            offset={-70}
            className="btn2"
          >
            <FaArrowRight />
            Projects
          </Link>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/RMahato4444"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-mahato-63276221a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/u/Rahulm4080/">
            <SiLeetcode />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-ring">
          <img src={profile} alt="Rahul Mahato" />
        </div>
      </div>
      <div className="scroll-indicator">
    <div></div>
  </div>
    </motion.section>
  );
}

export default Hero;
