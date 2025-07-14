import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWLYD_hIqaELUCgykojZYDpSzEDm1ABlw",
  authDomain: "project-tracker-718ba.firebaseapp.com",
  projectId: "project-tracker-718ba",
  storageBucket: "project-tracker-718ba.firebasestorage.app",
  messagingSenderId: "82972945017",
  appId: "1:82972945017:web:1b487e3624de9a744c42a8",
  measurementId: "G-69ZJKV5Z9H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
