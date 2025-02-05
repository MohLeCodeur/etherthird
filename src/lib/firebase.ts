import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvETDMTzL2bydZXQbyqazTzVs83Bo9HHA",
  authDomain: "etherscan-6dadb.firebaseapp.com",
  projectId: "etherscan-6dadb",
  storageBucket: "etherscan-6dadb.firebasestorage.app",
  messagingSenderId: "286708158142",
  appId: "1:286708158142:web:6ed9aee6418654070298ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, query, onSnapshot, addDoc, serverTimestamp };