import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";

import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { auth, db } from "./firebase";

const USER_COLLECTION = "users";

export const signUserOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign-Out Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Sign-In Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};

export const getUserByUid = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userRef);
    return userSnapshot.data();
  } catch (error) {
    console.error("Get User Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};

//register user with email and password and verify email
export const registerUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);
    await createUserByUid(userCredential.user.uid, {
      firstName,
      lastName,
      email,
      uid: userCredential.user.uid,
    });
    return true;
  } catch (error) {
    console.error("Register User Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};

export const createUserByUid = async (uid: string, data: any) => {
  try {
    //create user using the id as the user uuid
    const userRef = doc(db, USER_COLLECTION, uid);
    await setDoc(userRef, data);

    return true;

  } catch (error) {
    return error;
  }
};

export const getUserDetailsByUid = async (uid: string) => {
  try {
    const userRef = doc(db, USER_COLLECTION, uid);
    const userSnapshot = await getDoc(userRef);
    console.log("=========data================");
    console.log(userSnapshot.data());
    console.log("========data=================");
    return userSnapshot.data();
  } catch (error) {
    console.error("Get User Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};

export const sendUnVerifiedEmailLink = async (user: User) => {
  try {
    await sendEmailVerification(user);
  } catch (error) {
    console.error("Email Verification Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};
//send email verification
// export const sendEmailVerification = async (user) => {
//   try {
//     await sendEmailVerification(user);
//   } catch (error) {
//     console.error('Email Verification Error:', error);
//     throw error; // Rethrow the error to handle it outside this function if needed.
//   }
// };

//get all users
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);
    const users = querySnapshot.docs.map((doc) => doc.data());
    return users;
  } catch (error) {
    console.error("Get All Users Error:", error);
    throw error; // Rethrow the error to handle it outside this function if needed.
  }
};
