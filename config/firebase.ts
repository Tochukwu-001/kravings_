// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOZTabgpHCbBvLj8nXLdxFRj7t5TyOtU",
  authDomain: "kravings-9217b.firebaseapp.com",
  projectId: "kravings-9217b",
  storageBucket: "kravings-9217b.firebasestorage.app",
  messagingSenderId: "761973289702",
  appId: "1:761973289702:web:128eea7b8fba0060f94127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}