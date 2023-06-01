
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAewhxARTPadcuCCB2LU-Yfk0QYpE_Dupk",
  authDomain: "market-plcw.firebaseapp.com",
  projectId: "market-plcw",
  storageBucket: "market-plcw.appspot.com",
  messagingSenderId: "88165294183",
  appId: "1:88165294183:web:0ca5365bc116d14df074c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export  const googleProvider = new GoogleAuthProvider()
export const dataBase = getFirestore(app)