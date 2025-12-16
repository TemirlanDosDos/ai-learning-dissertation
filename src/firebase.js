import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCDuZr-Y568pIeIZGKKQq3rXlvZpOtr8Bs",
  authDomain: "https://ai-learning-dissertation-cc660.firebaseapp.com",
  projectId: "ai-learning-dissertation-cc660",
  storageBucket: "https://ai-learning-dissertation-cc660.firebasestorage.app",
  messagingSenderId: "384396495426",
  appId: "1:384396495426:web:1a01fdc7a804dcd9987bdb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
