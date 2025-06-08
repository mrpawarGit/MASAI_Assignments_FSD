import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzZDO_pzQKfoxxigS_aYDBWfoRvK3yxs4",
  authDomain: "task-manager-b95e2.firebaseapp.com",
  projectId: "task-manager-b95e2",
  storageBucket: "task-manager-b95e2.firebasestorage.app",
  messagingSenderId: "129442728729",
  appId: "1:129442728729:web:bc2b8243e0d351fb159388",
  measurementId: "G-8VBNWYFRXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
