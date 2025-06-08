import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signup-button");
  const loginBtn = document.getElementById("login-button");
  const signoutBtn = document.getElementById("signout-button");

  // signup
  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up Successful");
        window.location.href = "index.html";
      } catch (error) {
        document.getElementById("signup-message").innerText = error.message;
      }
    });
  }

  // login
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
      } catch (error) {
        document.getElementById("login-message").innerText = error.message;
      }
    });
  }

  // signout
  if (signoutBtn) {
    signoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        window.location.href = "index.html";
      } catch (error) {
        console.log(error.message);
      }
    });
  }
});
