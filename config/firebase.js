// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQmKUcO-v8Hlz7B-89-N_TiM5hK7MrZ6I",
  authDomain: "utsav-d4933.firebaseapp.com",
  projectId: "utsav-d4933",
  storageBucket: "utsav-d4933.appspot.com",
  messagingSenderId: "773169008059",
  appId: "1:773169008059:web:3961ea63c3fe687e94089e",
  measurementId: "G-S0YK8D8DPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);