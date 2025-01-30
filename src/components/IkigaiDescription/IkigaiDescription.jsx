import React from "react";
import {useNavigate} from "react-router-dom";
import styles from './IkigaiDescription.module.css';

function IkigaiDescription (){
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <span className={styles.title}>Ikiga-i</span>
            <div className={styles.description}>
            <p>Ikigai is a Japanese concept that translates to "reason for being."</p> <br />
            <p>It represents the intersection of four elements: what you love, what you are good at, what the world needs, and what you can be paid for.</p> <br />
            <p>Finding your ikigai brings purpose, fulfillment, and balance to life, blending passion, mission, vocation, and profession into a harmonious existence.</p> <br />
            </div> 
            <div>
            <button className={styles.button} onClick={()=>navigate("/login")}>
                Continue
            </button>
            </div>
            
        </div>

    )
}

export default IkigaiDescription;