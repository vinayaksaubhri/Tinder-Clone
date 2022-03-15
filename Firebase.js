import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCc3rmkzEUYCQ4smISV7QZvDfGG35SYM8U",
  authDomain: "tinder-clone-4c996.firebaseapp.com",
  databaseURL:
    "https://tinder-clone-4c996-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tinder-clone-4c996",
  storageBucket: "tinder-clone-4c996.appspot.com",
  messagingSenderId: "219730961722",
  appId: "1:219730961722:web:f098a6f2df95022ba2dc03",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app, {
  useFetchStreams: false,
  experimentalForceLongPolling: true,
  experimentalAutoDetectLongPolling: true,
});
const database = getDatabase();
export { auth, db, database };
