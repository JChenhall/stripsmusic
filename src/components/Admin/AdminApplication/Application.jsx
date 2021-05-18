import React, { useContext } from "react";
import { Router } from '@reach/router';
import AdminHome from '../AdminHome/AdminHome';
import AdminLogin from '../AdminLogin/AdminLogin';
import Home from '../../Home/Home';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Music from '../../Music/Music';
import AdminSongList from '../AdminSongList/AdminSongList';
import AdminSongLibrary from '../AdminSongLibrary/AdminSongLibrary';
import AdminPasswordReset from '../AdminPasswordReset/AdminPasswordReset';
import { UserContext } from "../../../context/UserProvider";

function Application() {

  const user = useContext(UserContext);

  return (
    

        user ?
      
        <AdminHome />
        
     
      :
      
      
        <Router>
       
            <Music path="/music" />
            <Contact path="/contact" />
            <AdminLogin path="/adminlogin" />
            <About path="/about" />
            <AdminSongList path="/adminsonglist" />
            <AdminSongLibrary path="/adminsonglibrary" />
            <AdminPasswordReset path="/adminpasswordreset" />
            <Home path="/"/>
          </Router>
      
  );
}
export default Application;
