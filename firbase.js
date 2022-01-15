// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM0cm-rZLcplsnVoAveN0TgWU2sPknaLg",
  authDomain: "uber-109f7.firebaseapp.com",
  projectId: "uber-109f7",
  storageBucket: "uber-109f7.appspot.com",
  messagingSenderId: "375039977399",
  appId: "1:375039977399:web:022c17e9bfc39f97ed2a32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
