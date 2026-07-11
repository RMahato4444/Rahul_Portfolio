import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:rahulm4080@gmail.com">rahulm4080@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+919679157322">+91 9679157322</a>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <a
                  href="https://maps.google.com/?q=Purulia,West+Bengal,India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purulia, West Bengal, India
                </a>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/RMahato4444"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-mahato-63276221a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/YOUR_LEETCODE_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
