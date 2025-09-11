// firebase.js (guarded to avoid duplicate app init)
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4aKRJ_BrVTBm8IS-vq9o3n7GWsXkarwY",
  authDomain: "task-p-44cf0.firebaseapp.com",
  databaseURL: "https://task-p-44cf0-default-rtdb.firebaseio.com",
  projectId: "task-p-44cf0",
  storageBucket: "task-p-44cf0.appspot.com",
  messagingSenderId: "465527785940",
  appId: "1:465527785940:web:ebd9b1bf5f4162a02e6e41",
  measurementId: "G-G9CL5WDDPH"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
