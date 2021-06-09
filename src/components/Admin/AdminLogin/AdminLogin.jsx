import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth } from "../../../firebase.js";
import './AdminLogin.css';

import GoogleFontLoader from 'react-google-font-loader';

const AdminLogin = () => {
  
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const signInWithEmailAndPasswordHandler = (event,email, password) => {
          event.preventDefault();
          auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError(" ⚠ Your email and/or password is not recognised, please try again.");
            console.error("ERROR, EMAIL AND/OR PASSWORD WRONG", error);
                });
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div className="adminBackground" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
      <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
      <h1 className="adminTitle">Admin Sign In</h1>
      
      <div className="musicForm">
        <form className="inputBox">
          <label htmlFor="userEmail" className="logTitle">
            Email:
          </label>
          <input
            type="email"
            className="adminLogLine"
            name="userEmail"
            value = {email}
            placeholder="    E.g: email@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="logTitle">
            Password:
          </label>
          <input
            type="password"
            className="adminLogLine"
            name="userPassword"
            value = {password}
            placeholder="    Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />

          {error !== null && <div className = "errorMessage">{error}</div>}

          <button className="adminSubmit" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
          
        </form>
        <p className="text-center my-3">
          <br />{" "}
          <Link to = "/adminpasswordreset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
