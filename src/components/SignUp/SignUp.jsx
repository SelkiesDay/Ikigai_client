import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

export default function SignUp() {
  const navigate = useNavigate();

  // Pre-fill form with provided user data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSignUp = async (event) => {
    event.preventDefault(); 
  
    // Send form data to backend server
    const response = await fetch('https://d67f-2a02-2788-1066-1009-d4e7-8a2-ed6-b9fe.ngrok-free.app/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        email: email,
        password: password,
      }),
    });
  
    const data = await response.json();
  
    if (data.error) {
      alert(data.error); 
    } else {
      alert('Sign Up successful!');
      navigate("/congratulations"); 
    }
  };
  
  return (
    <div className={styles.container}>
      <div><span className={styles.title}>Ikiga-i</span></div>
      <div className={styles.subtitle}><span className={styles.sign_up}>Sign Up</span></div>
      
      <form onSubmit={handleSignUp}>
        <div className={styles.name}>
            <label htmlFor="first_name">First Name</label> <br />
            <input 
              id="first_name" 
              className={styles.name} 
              type="text" 
              placeholder="Enter your first name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
        </div>
        <div className={styles.name}>
            <label htmlFor="last_name">Last Name</label> <br />
            <input 
              id="last_name" 
              className={styles.name} 
              type="text" 
              placeholder="Enter your last name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
        </div>
        <div className={styles.dob}>
            <label htmlFor="dob">Date of Birth</label> <br />
            <input 
              id="dob" 
              className={styles.dob} 
              type="date" 
              value={dob} 
              onChange={(e) => setDob(e.target.value)} 
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
