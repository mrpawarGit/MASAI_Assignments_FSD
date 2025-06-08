import { auth } from "../firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  await onAuthStateChanged(auth, (user) => {
    let username = user.email;
    let name = "";
    for (let i = 0; i < username.length; i++) {
      if (username[i] !== "@") {
        name += username[i];
      } else {
        break;
      }
    }
    document.getElementById("user-name").innerHTML = name;
  });
});
