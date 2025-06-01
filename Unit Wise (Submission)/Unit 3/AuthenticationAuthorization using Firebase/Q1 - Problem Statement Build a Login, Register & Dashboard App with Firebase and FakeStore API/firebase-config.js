import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGEDXFoIknUCC0B9zNT_aaUVVU1x-JGSw",
  authDomain: "e-store-8a082.firebaseapp.com",
  projectId: "e-store-8a082",
  storageBucket: "e-store-8a082.firebasestorage.app",
  messagingSenderId: "159167017530",
  appId: "1:159167017530:web:67233c467ff48c8005bb03",
  measurementId: "G-8X9Q1KLYR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);