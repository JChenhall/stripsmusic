import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';
import {useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import GoogleFontLoader from 'react-google-font-loader';
const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
      });
    const onSubmit = data => console.log(data);

    return (
        <section className= "adminBackground">
          <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
            <div className="inputBox">
            <h2> Admin Portal</h2>

            <input 
            type="text"
            placeholder="  username"
            name="username"
            className= "logLine"
            {...register("username",  
            { required: true,  maxLength: 20 })} 
            />
            
            <input type="text"
            name="details"
            {...register("details", { required: "Please fill in both fields" })} 
            placeholder="  password"
            className= "logLine"
            />

            <ErrorMessage
                errors={errors}
                name="details"
                render={({ messages }) => {
                console.log("messages", messages);
                return messages
                ? Object.entries(messages).map(([type, message]) => (
                <p key={type} className="loginAlert">{message} </p>
              ))
            : null;
        }}
      />
            <p>forgotten password</p>

            <input type="submit" className="adminSubmit"/>
            </div>
        </form>
        <Link to="/adminsonglist"><h2 className="pageLink">admin song list</h2></Link>
        <Link to="/adminsonglibrary"><h2 className="pageLink">admin song library</h2></Link>
        </section>
    )
}

export default AdminLogin
