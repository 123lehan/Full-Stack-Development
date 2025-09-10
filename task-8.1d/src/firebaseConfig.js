import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4aKRJ_BrVTBm8IS-vq9o3n7GWsXkarwY",
  authDomain: "task-p-44cf0.firebaseapp.com",
  databaseURL: "https://task-p-44cf0-default-rtdb.firebaseio.com",
  projectId: "task-p-44cf0",
  storageBucket: "task-p-44cf0.firebasestorage.app",
  messagingSenderId: "465527785940",
  appId: "1:465527785940:web:68438114aa3632f82e6e41",
  measurementId: "G-23EE6JEWPR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
