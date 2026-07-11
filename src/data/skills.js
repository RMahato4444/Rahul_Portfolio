import {
  FaCuttlefish,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
// import { SiMysql, SiVisualstudiocode, SiVercel } from "react-icons/si";
import { SiMysql, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: FaCuttlefish, level: 90 },
      { name: "C++", icon: FaCuttlefish, level: 90 },
      { name: "Python", icon: FaPython, level: 80 },
      { name: "JavaScript", icon: FaJs, level: 85 },
      { name: "SQL", icon: FaDatabase, level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 },
      { name: "Responsive Design", icon: FaCss3Alt, level: 90 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 80 },
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "VS Code", icon: VscVscode, level: 95 },
      { name: "Vercel", icon: SiVercel, level: 80 },
      { name: "Linux", icon: FaLinux, level: 75 },
    ],
  },
];