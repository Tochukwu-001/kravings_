// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFEF3kSrzSQI7-SsIQHQ2q0jiREMYj9-0",
  authDomain: "kravings-23080.firebaseapp.com",
  projectId: "kravings-23080",
  storageBucket: "kravings-23080.firebasestorage.app",
  messagingSenderId: "254508535746",
  appId: "1:254508535746:web:bf0d46d8a18bea1b30905b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };