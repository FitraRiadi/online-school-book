/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import './PageIntro.css'
import { useNavigate } from "react-router-dom";

export default function PageIntro({title,subTitle,goto , load, delay}){
    const navigate = useNavigate();
    title = title || "New Page";
    subTitle = subTitle || "Welcome Bro";
    delay = delay || 1500;
    const [isActive  , setIsActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
            if (load) load(true);
            if (goto) navigate(`/${goto}`);
            console.log("HABIS")
        },delay);

        return () => clearTimeout(timer);
    },[]);

    return (
        <div className={` container-fluid ${!isActive ? 'start-page-intro' : ''} text-center bg-warning d-flex justify-content-center align-items-center ${ isActive ? 'close-page-intro' : ''} `} style={{position:"fixed",top:"0",left:"0",height:"100vh"}}>
            <div style={{padding:"50px"}}>
                <h3 className="title-page" >{title}</h3>
                <hr />
                <h6>{subTitle}</h6>
            </div>
        </div>
    )
    
}