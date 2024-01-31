// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Y5KjxQnOyoz5bWRz32MpZ9mUiwhvJO4",
  authDomain: "signup-mobile-6129c.firebaseapp.com",
  projectId: "signup-mobile-6129c",
  storageBucket: "signup-mobile-6129c.appspot.com",
  messagingSenderId: "296917047912",
  appId: "1:296917047912:web:1a90dfa9c30376366379dd"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);