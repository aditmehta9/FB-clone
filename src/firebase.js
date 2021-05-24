import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmA0DnZ4eN8jzGupFPRawmdbscErpxtr8",
  authDomain: "socialmedia-clone-8f57c.firebaseapp.com",
  projectId: "socialmedia-clone-8f57c",
  storageBucket: "socialmedia-clone-8f57c.appspot.com",
  messagingSenderId: "5866723351",
  appId: "1:5866723351:web:b9a77be1c9225f7595e452",
  measurementId: "G-NP7TENK674"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}; 
export default db;