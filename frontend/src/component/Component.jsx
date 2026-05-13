import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";





export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
     window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
     });
  },[pathname]);
}


export const Writing = ()  => {
  return (
    <span style={{ color: '#e5e9f1' }}>
        <Typewriter
          options={{
            strings:[
              "Temukan Inspirasi!",
              "Cari Refrensi Baca",
              "Explorasi Literasi",
              "Online School Book"
            ],
            autoStart:true,
            loop:true,
            cursor:"|",
            delay:"20",
            deleteSpeed:"50",  
          }}
        />
      </span>
  );
}

