import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDmADi3ZnLkS3fki16pzbQ9Nz8ZpBqQ3bk",
    authDomain: "bootcamp-book-shop.firebaseapp.com",
    projectId: "bootcamp-book-shop",
    storageBucket: "bootcamp-book-shop.appspot.com",
    messagingSenderId: "580900935210",
    appId: "1:580900935210:web:a7789323350ff03e135553"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);