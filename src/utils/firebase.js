// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9mo9AyMvE9RZR5aEeaRMu9ZRWcjvr8SI",
  authDomain: "netflixgpt-2628b.firebaseapp.com",
  projectId: "netflixgpt-2628b",
  storageBucket: "netflixgpt-2628b.appspot.com",
  messagingSenderId: "328895460584",
  appId: "1:328895460584:web:6ef2d1d5ee0f24b699055d",
  measurementId: "G-EJ5679HVHX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
