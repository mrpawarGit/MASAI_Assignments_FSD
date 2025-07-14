import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj-BGz-K-mfdxs9qwXXQ9WhA-U_1NCHVY",
  authDomain: "mindtrack-8f782.firebaseapp.com",
  projectId: "mindtrack-8f782",
  storageBucket: "mindtrack-8f782.appspot.com",
  messagingSenderId: "275049618179",
  appId: "1:275049618179:web:4d199ae5ef069d55ad2736",
  measurementId: "G-5VJE7VX5K0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
