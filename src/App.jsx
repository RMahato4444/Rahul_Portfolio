import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import BackToTop from "./components/BackToTop/BackToTop";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Achievements />

      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;