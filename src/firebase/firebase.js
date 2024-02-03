
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };