// Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; // You can modify the CSS as needed

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full text-white py-4">
      <div id={styles.navigation} className="flex justify-around text-center">
        <button id={styles.explore_button} className="text-l font-gotu rounded">
          Explore
        </button>
        <button
          className="text-lg font-tsukimi hover:bg-slate-600 rounded"
          onClick={() => navigate("/inspirations")}
        >
          Inspirations
        </button>
        <button
          className="text-lg font-gotu hover:bg-slate-600 rounded"
          onClick={() => navigate("/ikigaimap")}
        >
          Ikigai Map
        </button>
        <button
          className="text-lg font-gotu hover:bg-slate-600 rounded"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="text-lg font-gotu hover:bg-slate-600 rounded"
          onClick={() => navigate("/me")}
        >
          Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
