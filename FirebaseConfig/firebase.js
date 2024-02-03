// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Az-jIE7x-4ivt4xk-e0hgdcTB9OA19s",
  authDomain: "yoceleb-5f235.firebaseapp.com",
  projectId: "yoceleb-5f235",
  storageBucket: "yoceleb-5f235.appspot.com",
  messagingSenderId: "408041723685",
  appId: "1:408041723685:web:2a4909a8eed7421c726ccc",
  measurementId: "G-PV3WD469V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);