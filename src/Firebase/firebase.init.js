// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3E9APMwdcTi9gl5ORuA4OO3UY9arzT8",
  authDomain: "assignment-11-8f2e3.firebaseapp.com",
  projectId: "assignment-11-8f2e3",
  storageBucket: "assignment-11-8f2e3.firebasestorage.app",
  messagingSenderId: "395841977477",
  appId: "1:395841977477:web:e8a1b358ddeeec01777dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);