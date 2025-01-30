import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Importing CSS module

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle login logic here (e.g., form validation, API calls)
    navigate("/explore"); // Navigate to the explore page after successful login
  };

  return (
    <div className={styles.container}>
       <div><span className={styles.title}>Ikiga-i</span></div>
        <div className={styles.login_title}> 
          <span className={styles.subtitle}>Log in</span>
        </div>
         <div className={styles.login_container}>
           <form onSubmit={handleLogin}>
          <div className={styles.email}>
              <label htmlFor="email">Email</label> <br />
              <input id="email" className={styles.email_container} type="text" placeholder="Enter your email"/>{" "}
          </div>
          <div className={styles.password_container}>
          <label htmlFor="password">Password</label>  <br />
          <input
            id="password" className={styles.password} type="password" placeholder="Enter your password"/>{" "}
          </div>
          <div ><button type="submit" className={styles.login_button}>Log In</button></div>
        </form>
      </div>
      <div className={styles.alternative}>
        <div className={styles.line}>
          <svg width="112" height="1" viewBox="0 0 112 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="112" y2="0.5" stroke="#D9D9D9"/>
          </svg>
        </div>
        <p className={styles.or}>or</p> 
        <div className={styles.line}>
          <svg width="112" height="1" viewBox="0 0 112 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="112" y2="0.5" stroke="#D9D9D9"/>
          </svg>
        </div>
      </div>
      <div className={styles.signup_container}>
        <button  className={styles.signup_button} onClick={() => navigate("/signup")}>Sign Up</button>{" "}<br />
        <p className={styles.createAccount}>to create an account</p>
      </div>
    </div>
  );
}

export default Login;
