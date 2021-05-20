import React, { useContext } from 'react'
import { UserContext } from "../../../context/UserProvider";
import { Link } from "@reach/router";
import {auth} from "../../../firebase";
import './AdminHome.css';
import GoogleFontLoader from 'react-google-font-loader';



const AdminHome = () => {
    const user = useContext(UserContext);
    const {displayName, email} = user;
    console.log(user);

    return (
        <div className = "adminHomeBackground" style={{ fontFamily: 'Roboto Mono, monospaced' }}>
          <GoogleFontLoader fonts={[{font: 'Roboto',weights: [400, '400i'],},{font: 'Roboto Mono',weights: [400, 700],},]}subsets={['cyrillic-ext', 'greek']}/>

          <nav>
          <Link to ="adminsonglist">AdminSongList</Link>
          <Link to ="adminsonglibrary">AdminSongLibrary</Link>
          </nav>

          <div className="userDetailBox" >
          
            <div className = "userDetails">
            <h2 className = "stats">{displayName}</h2>
            <h3 className = "stats">{email}</h3>
            </div>
          </div>
         
          <button className = "signOutButton" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
      ) 
    
    };

export default AdminHome
