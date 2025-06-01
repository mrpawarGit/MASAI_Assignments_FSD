import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const logoutBtn = document.getElementById("logout-btn");

  // login function
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // redirect users to login page
        window.location.href = "dashboard.html";
      } catch (error) {
        document.getElementById("login-msg").innerText = error.message;
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // redirect users to login page
        alert("Registration Sucessfull!");
        window.location.href = "index.html";
      } catch (error) {
        document.getElementById("signup-msg").innerText = error.message;
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      alert("Logout Sucessfull!");
      window.location.href = "index.html";
    });
  }
});
