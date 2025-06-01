import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded',()=>{
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const logoutBtn = document.getElementById('logout-btn');

  if(loginBtn){
    loginBtn.addEventListener('click',async()=>{
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      try {
        await 
      } catch (error) {
        
      }
    })
  }
})

