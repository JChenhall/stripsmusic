import React, { useState, useEffect } from "react";

import { createSong, createEP, getAllSongs, getAllEPs, deleteSong, deleteEP } from "../../../context/music.provider.js";
import './AdminSongList.css';
import {useForm } from 'react-hook-form';
import GoogleFontLoader from 'react-google-font-loader';
import { storage, firestore } from "../../../firebase";


let EPInfo;

const AdminSongList = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
      });

    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({
        criteriaMode: "all"
      });
    
    const [image, setImg] = useState(null);
    const [url, setUrl] = useState('');
    

      //image upload
    const handleChange = (e) => {
    if(e.target.files[0].size < 3 * 1024 * 1024){
      console.log(e.target.files[0])
      setImg(e.target.files[0]);
      console.log("image is",image)

      const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
      uploadTask.on("state_changed", snapshot => {
                }, error => {
                  alert(error.message);
                }, () => {
                  storage.ref("images").child(e.target.files[0].name).getDownloadURL().then(url => {
                    setUrl(url)
                  })
                })
    } else{
      alert("Image too large");
    }
  } 

  const onSubmitEP = (data) => {
      const epCreation = createEP(data, url);
  };

  const onSubmitSong = (data) => {
    const songCreation = createSong(data, url);
};
  
//GETTING EP INFO FOR SELECT
const [loading, setLoading] = useState(false);

const getEPInfo =  async () => {
  await firestore
    .collection("eplist")
    .doc('EP1')
    .get()
    .then((response) => {
      EPInfo = response.data();
      setLoading(true)
      return EPInfo;
    });
};

useEffect(() => { 
  const letsGo = async () => {
    await getEPInfo();
  }
  letsGo();
}, []);

    return (
      <>
      { loading &&
        <section className="adminListBackground">
             <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>
         {/* EP upload */}   
         <div className="musicFormContainer">
        <form key={1} onSubmit={handleSubmit(onSubmitEP)} className="musicSelectForm" style={{ fontFamily: 'Roboto Mono, monospaced' }}>

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
            <div className="imagepreview">{url && <img src={url} />}</div>
            <input 
            type="file"
            name="imageUrl"
            accept="image/x-png,image/gif,image/jpeg,image/PNG,"
            className= "logLine"
            onChange={handleChange}
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
            </form>
            
           {/* SONG upload */}
            <form key={2} onSubmit={handleSubmit2(onSubmitSong)} className="musicSelectForm" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
           
            <div className="trackInputBox">
            
            <h4 className="formTitle">EP Select</h4>
        
            <select
            placeholder="  Select an EP"
            name="epSelect"
            className= "logLine"
            {...register2("epSelect",  
            { required: true })} >
                <option>{EPInfo.data.EPTitle}</option>
            </select>
            
            

            <h4 className="formTitle">Track Title</h4>

            <input 
            type="text"
            placeholder="  Title"
            name="songTitle"
            className= "logLine"
            {...register2("songTitle",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Time</h4>

            <input 
            type="number"
            step="0.01"
            name="songTimer"
            className= "logLine"
            {...register2("songTimer",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Description</h4>

            <input 
            type="text"
            placeholder="  Description"
            name="songInfo"
            className= "logLine"
            {...register2("songInfo",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Spotify</h4>

            <input 
            type="text"
            placeholder="  Spotify Link"
            name="songSpotify"
            className= "logLine"
            {...register2("songSpotify",  
            { required: true })} 
            />

            <h4 className="formTitle">Track YouTube Video</h4>

            <input 
            type="text"
            placeholder="  YouTube Video Link"
            name="songYouTube"
            className= "logLine"
            {...register2("songYouTube",  
            { required: true })} 
            />

            <h4 className="formTitle">Track YouTube Music</h4>

            <input 
            type="text"
            placeholder="  YouTube Music Link"
            name="songYouTubeMusic"
            className= "logLine"
            {...register2("songYouTubeMusic",  
            { required: true })} 
            />

            <h4 className="formTitle">Track Amazon Music</h4>

            <input 
            type="text"
            placeholder="  Amazon Music Link"
            name="songAmazon"
            className= "logLine"
            {...register2("songAmazon",  
            { required: true })} 
            />

            <h4 className="formTitle">iTunes Music</h4>

            <input 
            type="text"
            placeholder="  iTunes Music Link"
            name="songiTunes"
            className= "logLine"
            {...register2("songiTunes",  
            { required: true })} 
            />

            <input type="submit" className="trackSubmit"/>
            </div>
        </form>       
        </div> 
        
        </section>
}
        </>
        
        )
      
}

export default AdminSongList
 