// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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


    // .then((result) => {
    //   const credential: any = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;

    //   // IdP data available using getAdditionalUserInfo(result)
    //   // ...
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
    return authenticateUser;
  } catch (error) {
    throw new Error(`Error authenticating  user ${error}`);
  }
};

export { app, auth as firebaseGoogleAuth, signInUser };
//todo set up authentication firebase services here and export it
