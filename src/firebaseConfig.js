// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBztJqny43ptDGPQtJRwzgsZOW12yV6Fq4",
  authDomain: "wellnest-fc1e7.firebaseapp.com",
  projectId: "wellnest-fc1e7",
  storageBucket: "wellnest-fc1e7.appspot.com",
  messagingSenderId: "113136844454",
  appId: "1:113136844454:web:827434afb7772a43293e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase FireStore Database and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);
export {app,db,auth,storage};