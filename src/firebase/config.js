// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAedMbTZdhQAtEb4GcfOFsRUBIJAQkrJUU",
  authDomain: "react-cursos-8db57.firebaseapp.com",
  projectId: "react-cursos-8db57",
  storageBucket: "react-cursos-8db57.appspot.com",
  messagingSenderId: "95869971382",
  appId: "1:95869971382:web:3a8d389cfed277470a2f17"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

