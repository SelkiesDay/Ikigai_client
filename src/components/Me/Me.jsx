import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Me.module.css"

export function Me() {
  const [volume, setVolume] = useState(50); 
  const navigate = useNavigate();

  return (
    <div id={styles.container}>
        <h3 id={styles.ikigai} className='text-base font-tsukimi mb-20'>Ikiga-I</h3>
        <h1 id={styles.page_title} className='text-3xl font-tsukimi mb-12'>My settings</h1>
        <label id={styles.volume}className="text-2lg font-tsukimi rounded">Music Volume</label>
        <input
            id="default-range"
            type="range"
            value={volume} 
            onChange={(e) => setVolume(e.target.value)} 
            className="w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-200 mb-16"
        />
        <span id={styles.change_password}  > Change Password</span>
        <span id={styles.delete_account} > Delete my account</span>
      <button onClick={() => navigate("/explore")}>Return to Explore</button>
    
    </div>
  );
}

export default Me;