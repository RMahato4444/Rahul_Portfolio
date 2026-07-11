import "./Navbar.css";
import { Link } from "react-scroll";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Sling as Hamburger } from "hamburger-react";

import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <div className="logo">
        <Link
          to="home"
          spy={true}
          smooth="easeInOutQuart"
          duration={900}
          offset={-80}
        >
          Rahul Mahato
        </Link>
      </div>

      <ul className={open ? "nav-links mobile" : "nav-links"}>
        <li>
          <Link
            to="home"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="education"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            spy={true}
            smooth="easeInOutQuart"
            duration={900}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        <a
          href="https://github.com/RMahato4444"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rahul-mahato-63276221a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/Rahulm4080/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          title="LeetCode"
        >
          <SiLeetcode />
        </a>

        <div className="hamburger">
          <Hamburger toggled={open} toggle={setOpen} size={24} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
