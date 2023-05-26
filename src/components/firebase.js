
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrBVKP9meUNP6J8yuZc035Ub7g-N_SJH4",
    authDomain: "linkedin-clone-16b68.firebaseapp.com",
    projectId: "linkedin-clone-16b68", 
    storageBucket: "linkedin-clone-16b68.appspot.com",
    messagingSenderId: "307658035307",
    appId: "1:307658035307:web:766ec314bb7c697f31e12e"
  };
  
const app = initializeApp(firebaseConfig)
// const db = firebaseApp.fireStore();
// const auth = firebase.auth();
export const auth = getAuth();



export const db = getFirestore(app);
