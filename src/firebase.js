// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAianVY1VDNjty3nsSllWmcLMG5X3EyqeQ",
  authDomain: "english-cources.firebaseapp.com",
  projectId: "english-cources",
  storageBucket: "english-cources.appspot.com",
  messagingSenderId: "244570616508",
  appId: "1:244570616508:web:7ff145bd4133ed2f4116b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const orderby = orderBy(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
