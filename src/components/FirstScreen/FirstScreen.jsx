import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirstScreen.module.css";

function FirstScreen() {
  const navigate = useNavigate();

  const array = [
    { char: "i", style: { top: "10%", left: "40%" } },
    { char: "k", style: { top: "20%", left: "50%" } },
    { char: "i", style: { top: "30%", left: "40%" } },
    { char: "g", style: { top: "40%", left: "40%" } },
    { char: "a", style: { top: "50%", left: "30%" } },
    { char: "i", style: { top: "60%", left: "40%" } },
  ];
  //{ char: "i", style: { top: "10%", left: "50%" } },


    useEffect(() => {
     const timer = setTimeout(()=>{
      navigate("/welcome")
     }, array.length * 500 + 1000)

     return () => clearTimeout(timer)
    }, [array.length, navigate]);

  return (
   
    <div className={styles.container}>
      {array.map((element, index) => (
        <span className={styles.letter}
          key={index}
          style={{
            position: "absolute",
            ...element.style,
            animationDelay: `${index * 500}ms`
          }}
        >
          {element.char}
        </span>
      ))}
    </div>
    
  );
}

export default FirstScreen;
