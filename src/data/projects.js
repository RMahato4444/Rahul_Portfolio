import netflix from "../assets/images/netflix.png";
import rps from "../assets/images/rps.png";

export const projects = [
  {
    id: 1,
    featured: false,
    title: "Netflix UI Clone",
    image: netflix,
    description:
      "A fully responsive Netflix landing page clone built using semantic HTML5 and modern CSS3. Designed with Flexbox and Grid layouts while maintaining a clean, responsive UI across desktop, tablet and mobile devices.",
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "Grid",
      "Responsive"
    ],
    github: "https://github.com/RMahato4444/NetflixClone",
    live: "https://netflix-clone-three-sand-55.vercel.app/"
  },

  {
    id: 2,
    featured: false,
    title: "Rock Paper Scissors",
    image: rps,
    description:
      "Interactive browser game built using JavaScript featuring DOM manipulation, score tracking, animations and responsive UI.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    github: "https://github.com/RMahato4444/RockPaperScissor",
    live:
      "https://rock-paper-scissor-lake-five.vercel.app/"
  }
];