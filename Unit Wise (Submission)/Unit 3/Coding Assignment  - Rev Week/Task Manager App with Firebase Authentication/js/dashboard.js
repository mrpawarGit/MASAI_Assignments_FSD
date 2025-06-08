import { auth } from "../firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  // username disp
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
    document.getElementById("user-name").innerHTML = name.toUpperCase();
  });

  fetchData();
});

const api = "https://jsonplaceholder.typicode.com/posts";
let posts = [];

async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await res.json();

  dispData(posts);
}

function dispData(data) {
  let postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  data.forEach((user) => {
    let div = document.createElement("div");
    div.className = "post-box";

    div.innerHTML = `
      <p>${user.title}</p>
      <button onclick="editPost(${user.id})">Edit</button>
      <button onclick="deletePost(${user.id})">Delete</button>
    `;

    postContainer.appendChild(div);
  });
}

// delete
window.deletePost = async function (id) {
  const response = await fetch(`${api}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    posts = posts.filter((post) => post.id !== id);
    dispData(posts);
  } else {
    console.error("Failed to delete post");
  }
};

// edit
window.editPost = async function (id) {};

// post
let i = 101;

window.addPost = async function () {
  let userInput = document.getElementById("userInput").value.trim();
  if (!userInput) return;

  await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 0,
      id: 0,
      title: userInput,
      body: "NA",
    }),
  });

  document.getElementById("userInput").value = "";
  dispData(posts);
};
