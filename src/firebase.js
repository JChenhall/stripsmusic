import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBsp80D11Kru85KjNifaq6Sx739-pHV8Q0",
    authDomain: "stripsmusic.firebaseapp.com",
    projectId: "stripsmusic",
    storageBucket: "stripsmusic.appspot.com",
    messagingSenderId: "646880956251",
    appId: "1:646880956251:web:605f21341b68ee0751547e",
    measurementId: "G-JTVKLVV8LE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
