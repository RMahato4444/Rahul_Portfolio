import "./Achievements.css";
import { achievements } from "../../data/achievements";
import { motion } from "framer-motion";
function Achievements() {

return(

<motion.section
id = "achievements"
className="achievements"
initial={{opacity:0}}

whileInView={{opacity:1}}

viewport={{once:true}}

transition={{duration:.8}}
>

<div className="container">

<h2 className="section-title">

My <span className="highlight">Achievements</span>

</h2>

<div className="achievement-grid">

{

achievements.map((item,index)=>(

<div className="achievement-card" key={index}>

<h2>{item.title}</h2>

<p>{item.subtitle}</p>

</div>

))

}

</div>

</div>

</motion.section>

);

}
export default Achievements;