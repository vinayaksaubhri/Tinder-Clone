import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCc3rmkzEUYCQ4smISV7QZvDfGG35SYM8U",
  authDomain: "tinder-clone-4c996.firebaseapp.com",
  projectId: "tinder-clone-4c996",
  storageBucket: "tinder-clone-4c996.appspot.com",
  messagingSenderId: "219730961722",
  appId: "1:219730961722:web:e3159386bf0982cba2dc03",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
