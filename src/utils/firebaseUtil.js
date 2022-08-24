// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//   projectId: process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId: process.env.REACT_APP_FIREBASE_appId,
// });

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// export const signup = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const login = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// export const logout = () => {
//   signOut(auth);
// };

// export const loginWithGoogle = () => {
//   googleProvider.setCustomParameters({ prompt: "select_account" });
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};
// Import the functions you need from the SDKs you need
