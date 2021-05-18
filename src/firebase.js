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
  

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, password } = user;
      try {
        await userRef.set({
          displayName,
          email,
          password,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
