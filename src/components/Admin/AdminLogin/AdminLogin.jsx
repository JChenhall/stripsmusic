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
          setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
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
    <div className="1">
      <h1 className="2">Admin Sign In</h1>
      <div className="3">
        {error !== null && <div className = "4">{error}</div>}
        <form className="5">
          <label htmlFor="userEmail" className="6">
            Email:
          </label>
          <input
            type="email"
            className="7"
            name="userEmail"
            value = {email}
            placeholder="E.g: email@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
          
        </form>
        <p className="text-center my-3">
          <br />{" "}
          <Link to = "/adminhome" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

    


export default AdminLogin;
