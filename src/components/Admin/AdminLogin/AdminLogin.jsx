import React from 'react';

import './AdminLogin.css';
import {useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
      });
    const onSubmit = data => console.log(data);

    return (
        <section className= "adminBackground">
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
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
            {...register("details", { required: <p className="loginAlert">"Please fill in both fields"</p> })} 
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
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
            <p>forgotten password</p>

            <input type="submit" className="adminSubmit"/>
            </div>
        </form>
            
        </section>
    )
}

export default AdminLogin
