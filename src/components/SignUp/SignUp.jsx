import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

export default function SignUp() {
  const navigate = useNavigate();

  // Declare state to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent page reload
  
    // Send form data to backend server
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,  // Sending name as username to backend
        email: email,
        password: password,
      }),
    });
  
    const data = await response.json();
  
    if (data.error) {
      alert(data.error); // Show error message from server
    } else {
      alert('Sign Up successful!');
      navigate("/congratulations"); // Navigate to congratulations page if signup is successful
    }
  };
  

  return (
    <div className={styles.container}>
      <div><span className={styles.title}>Ikiga-i</span></div>
      <div className={styles.subtitle}><span className={styles.sign_up}>Sign Up</span></div>
      
      <form onSubmit={handleSignUp}>
        <div className={styles.name}>
            <label htmlFor="name">Name</label> <br />
            <input 
              id="name" 
              className={styles.name} 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <div className={styles.email}>
            <label htmlFor="email">Email</label> <br />
            <input 
              id="email" 
              className={styles.email} 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
        </div>
        <div className={styles.password_container}>
            <label htmlFor="password">Password</label> <br />
            <input 
              id="password" 
              className={styles.password} 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            /> 
        </div>
        <div className={styles.signup_container}>
            <button className={styles.signup_button} type="submit">Sign Up</button>
        </div>
        <div className={styles.previous} onClick={() => navigate("/login")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" height="27">
              <path stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </div>
      </form>
    </div>
  );
}

