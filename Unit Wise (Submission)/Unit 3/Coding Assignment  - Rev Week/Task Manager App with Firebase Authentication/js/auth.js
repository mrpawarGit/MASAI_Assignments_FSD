import { auth, db } from "../firebas-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-button");
  const signupBtn = document.getElementById("signup-button");
  const logoutBtn = document.getElementById("logout-button");

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        // redirect
        window.location.href = "dashboard.html";
      } catch (error) {
        document.getElementById("login-message").innerText = error.message;
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // redirect
        window.location.href = "index.html";
      } catch (error) {
        document.getElementById("signup-message").innerText = error.message;
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "index.html";
    });
  }
});
