import "./Contact.css";
import { useRef, useState } from "react";
import { sendEmail } from "../../services/email";
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
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "from_name":
        setFormData((prev) => ({
          ...prev,
          name: value,
        }));
        break;

      case "from_email":
        setFormData((prev) => ({
          ...prev,
          email: value,
        }));
        break;

      case "subject":
        setFormData((prev) => ({
          ...prev,
          subject: value,
        }));
        break;

      case "message":
        setFormData((prev) => ({
          ...prev,
          message: value,
        }));
        break;

      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await sendEmail(formRef.current);

      setStatus("sent");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error.status);
      console.error("Text:", error.text);

      setStatus("error");
    }
  };

  const [status, setStatus] = useState("");
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

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="form-status success">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                ❌ Failed to send message. Please check all fields and try
                again.
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
