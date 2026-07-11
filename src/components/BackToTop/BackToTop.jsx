import "./BackToTop.css";

import { FaArrowUp } from "react-icons/fa";

import { useEffect,useState } from "react";

function BackToTop(){

const[top,setTop]=useState(false);

useEffect(()=>{

const handle=()=>{

setTop(window.scrollY>400);

}

window.addEventListener("scroll",handle);

return()=>window.removeEventListener("scroll",handle);

},[]);

return(

top&&(

<button

className="top-btn"

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

>

<FaArrowUp/>

</button>

)

);

}

export default BackToTop;