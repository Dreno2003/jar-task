// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import firebase from "firebase/compat/app";
import {
  getFirestore,
  updateDoc,
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

import {
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";

import { todotype } from "@/types/types";


const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VITE_APP_FIREBASE_API_KEY_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // init firestore
const collectionRef = collection(db, 'todos')


const signInUser = async () => {

  try {
    await setPersistence(auth, browserLocalPersistence);
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



const signOutUser = async () => {
  try {
    const signoutuser = await signOut(auth);
    return signoutuser;

  } catch (error) {
    throw new Error('Errro signing user out');
  }
}


//user switching account 
const switchUserAccount = async () => {

  const googleAuthProvider = provider;
  signInWithRedirect(auth, googleAuthProvider);

}



const addDataToFirestore = async ({ todos, completed }: todotype) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todos: todos,
      completed: completed
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};



async function getData() {
  return new Promise((resolve) => {
    onSnapshot(collectionRef, (snapshot) => {
      let todos: any = [];
      snapshot.docs.forEach((doc) => {
        let data = doc.data();
        // todos.push({ ...data,  });
        todos.push({ ...data, id: doc.id });
      });
      resolve(todos);
    });
  });
}



// Update a specific document
// const updateTodo = (todoId, updatedData) => {

//   collectionRef
//     .doc(todoId)
//     .update(updatedData)
//     .then(() => {
//       console.log('Document successfully updated!');
//     })
//     .catch((error) => {
//       console.error('Error updating document: ', error);
//     });
// };


const upDateTodo = async ( todoId, updatedFields ) => {
  const todoRef = doc(db, "todos", todoId);
  await updateDoc(todoRef, updatedFields);
  // Handle success or error (optional)
};

export {
  app,
  auth,
  firebase,
  signInUser,
  onAuthStateChanged,
  signOutUser,
  switchUserAccount,
  addDataToFirestore,
  getData,
  upDateTodo
};


//todo set up authentication firebase services here and export it
