import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBNuIazCgwI9_PQ-aKI_GiwB-KrLyUXRtc",
  authDomain: "login-auth-20492.firebaseapp.com",
  projectId: "login-auth-20492",
  storageBucket: "login-auth-20492.firebasestorage.app",
  messagingSenderId: "964535541974",
  appId: "1:964535541974:web:ef0b91764250e4bec52977",
  measurementId: "G-CTS6ZST8XE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
