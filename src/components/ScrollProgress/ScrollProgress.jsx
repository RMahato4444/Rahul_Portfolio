import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress() {

    const [width,setWidth]=useState(0);

    useEffect(()=>{

        const update=()=>{

            const total=document.documentElement.scrollHeight-window.innerHeight;

            const progress=(window.scrollY/total)*100;

            setWidth(progress);

        }

        window.addEventListener("scroll",update);

        return ()=>window.removeEventListener("scroll",update);

    },[]);

    return(

<div

className="progress"

style={{width:`${width}%`}}

/>

    );

}

export default ScrollProgress;