// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider ,  onAuthStateChanged, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VITE_APP_FIREBASE_API_KEY_MEASUREMENT_ID,
};
// Initialize Firebase
//init. firebase auth.
// init google auth provider

//TODo presite auth

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInUser = async () => {
  try {
    const authenticateUser = await signInWithPopup(auth, provider);

    if (authenticateUser) {
      const credential = GoogleAuthProvider.credentialFromResult(authenticateUser);
      const token = credential?.accessToken;
      const user = authenticateUser.user;
      return {
        token,
        user
      }
    }

    return authenticateUser;
  } catch (error) {
    throw new Error(`Error authenticating  user ${error}`);
  }
};

export { app, auth , firebase, signInUser , onAuthStateChanged};
//todo set up authentication firebase services here and export it
