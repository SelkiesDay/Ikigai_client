import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://9507-2a02-2788-1066-1009-d645-1cd8-799b-14cb.ngrok-free.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);
      navigate("/explore");
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
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
            <input
              id="email"
              className={styles.email_container}
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.password_container}>
            <label htmlFor="password">Password</label>  <br />
            <input
              id="password"
              className={styles.password}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.login_button}>Log In</button>
        </form>

        {/* Error Popup */}
        {error && (
          <div className={styles.errorPopup}>
            <div className={styles.errorMessage}>
              {error}
            </div>
            <button className={styles.closeError} onClick={() => setError("")}>Close</button>
          </div>
        )}

        <div className={styles.line}>
          <svg width="112" height="1" viewBox="0 0 112 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="112" y2="0.5" stroke="#D9D9D9"/>
          </svg>
        </div>

        <div className={styles.signup_container}>
          <p className={styles.createAccount}>to create an account</p>
          <br />
          <button className={styles.signup_button} onClick={() => navigate("/signup")}>Sign Up</button><br />
        </div>
      </div>
    </div>
  );
}

export default Login;
