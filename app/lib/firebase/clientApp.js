// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAp1lWZfDc480UT1rj3F9QKA1KNE8s2P0",
  authDomain: "nextjs-hosting-app-296f8.firebaseapp.com",
  projectId: "nextjs-hosting-app-296f8",
  storageBucket: "nextjs-hosting-app-296f8.appspot.com",
  messagingSenderId: "895892893813",
  appId: "1:895892893813:web:9e692895d48e4aadfe483c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };