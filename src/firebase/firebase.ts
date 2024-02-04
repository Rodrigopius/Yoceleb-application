import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import React, { createContext, ReactNode } from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5Az-jIE7x-4ivt4xk-e0hgdcTB9OA19s',
  authDomain: 'yoceleb-5f235.firebaseapp.com',
  projectId: 'yoceleb-5f235',
  storageBucket: 'yoceleb-5f235.appspot.com',
  messagingSenderId: '408041723685',
  appId: '1:408041723685:web:2a4909a8eed7421c726ccc',
  measurementId: 'G-PV3WD469V4',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);
const storage:any = getStorage(app);

export { app, db, auth, storage };

// TypeScript definitions for FirebaseContext
interface FirebaseContextProps {
  children: ReactNode;
}

export const FirebaseContext = createContext<FirebaseApp | null>(null);

// TypeScript definitions for FirebaseProvider
// export const FirebaseProvider: React.FC<FirebaseContextProps> = ({ children }) => {
//   return <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>;
// };
