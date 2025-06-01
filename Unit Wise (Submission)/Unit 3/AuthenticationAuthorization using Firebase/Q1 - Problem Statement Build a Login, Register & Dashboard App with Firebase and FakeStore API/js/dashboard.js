import { auth } from "../firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  onAuthStateChanged(auth, (user) => {
    document.getElementById("username").innerHTML = user.email;

    fetchProducts();
  });
});

async function fetchProducts() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  let conatiner = document.getElementById("conatiner");
  conatiner.innerHTML = "";

  data.forEach((product) => {
    let div = document.createElement("div");
    div.className = "product-box";

    div.innerHTML = `
      <h4>${product.title}</h4>
      <img src="${product.image}" alt="${product.title}">
      <p>Price: ${product.price}</p>
    `;
    conatiner.appendChild(div);
  });
}
