// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3sOGXD3bhirtLuLqkGRKV7FRe-2LRKho",
  authDomain: "react-netflix-a070f.firebaseapp.com",
  projectId: "react-netflix-a070f",
  storageBucket: "react-netflix-a070f.firebasestorage.app",
  messagingSenderId: "907997300006",
  appId: "1:907997300006:web:980faeca1d2b1166076de7",
  measurementId: "G-546MGGPKDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();