import React from 'react';

import './AdminSongList.css';
import {useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import GoogleFontLoader from 'react-google-font-loader';


const AdminSongList = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
      });
    const onSubmit = data => console.log(data);

    return (
        <section className="adminListBackground">
             <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
        <form onSubmit={handleSubmit(onSubmit)} className="musicForm" style={{ fontFamily: 'Roboto Mono, monospaced' }}>

            <div className="epInputBox">


            <h4 className="formTitle">EP Title</h4>

            <input 
                type="text"
                placeholder="  EP Title"
                name="EPTitle"
                className= "logLine"
                {...register("EPTitle",  
                { required: true })} 
            />

            <h4 className="formTitle">EP Image</h4>

            <input 
            type="image"
            name="EPImage"
            className= "logLine"
            {...register("EPImage",  
            { required: true })} 
            />

            <h4 className="formTitle">EP Description</h4>

            <input 
            type="text"
            placeholder="  EP Description"
            name="EPDescription"
            className= "logLine"
            {...register("EPDescription",  
            { required: true })} 
            />

            <input type="submit" className="epSubmit"/>

            </div>
            
            <div className="trackInputBox">
            
            <h4 className="formTitle">EP Select</h4>
        
            <input 
            type="select"
            placeholder="  Select an EP"
            name="epSelect"
            className= "logLine"
            {...register("epSelect",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Title</h4>

            <input 
            type="text"
            placeholder="  Title"
            name="Title"
            className= "logLine"
            {...register("Title",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Time</h4>

            <input 
            type="time"
            name="Time"
            className= "logLine"
            {...register("Time",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Description</h4>

            <input 
            type="text"
            placeholder="  Description"
            name="Description"
            className= "logLine"
            {...register("Description",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Spotify</h4>

            <input 
            type="text"
            placeholder="  Spotify Link"
            name="Spotify"
            className= "logLine"
            {...register("Spotify",  
            { required: true })} 
            />

            <h4 className="formTitle">Track YouTube Video</h4>

            <input 
            type="text"
            placeholder="  YouTube Video Link"
            name="YouTubeVideo"
            className= "logLine"
            {...register("YouTubeVideo",  
            { required: true })} 
            />

            <h4 className="formTitle">Track YouTube Music</h4>

            <input 
            type="text"
            placeholder="  YouTube Music Link"
            name="YouTubeMusic"
            className= "logLine"
            {...register("YouTubeMusic",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Amazon Music</h4>

            <input 
            type="text"
            placeholder="  Amazon Music Link"
            name="AmazonMusic"
            className= "logLine"
            {...register("AmazonMusic",  
            { required: true })} 
            />

            <h4 className="formTitle">iTunes Music</h4>

            <input 
            type="text"
            placeholder="  iTunes Music Link"
            name="iTunesMusic"
            className= "logLine"
            {...register("iTunesMusic",  
            { required: true })} 
            />

            <input type="submit" className="trackSubmit"/>
            </div>
        </form>        
        </section>
        )
}

export default AdminSongList
 