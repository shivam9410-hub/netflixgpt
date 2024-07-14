// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsY0PZs3P3F4tdwKYJuxviD5j4R2Xhyhk",
  authDomain: "netflixgpt-8fcf4.firebaseapp.com",
  projectId: "netflixgpt-8fcf4",
  storageBucket: "netflixgpt-8fcf4.appspot.com",
  messagingSenderId: "947279662394",
  appId: "1:947279662394:web:23636e917937ce8ed71403",
  measurementId: "G-CXBFPV20P6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export  const  auth = getAuth(app);  
