import { auth } from "../firebas-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const userEmail = localStorage.getItem("user");
if (!userEmail) window.location.href = "index.html";

document.getElementById("user-email").innerText = userEmail;

const taskList = document.getElementById("task-list");

document.getElementById("logout-btn").addEventListener("click", async () => {
  await signOut(auth);
  localStorage.removeItem("user");
  window.location.href = "index.html";
});

document.getElementById("add-task").addEventListener("click", async () => {
  const title = document.getElementById("task-title").value;
  const body = document.getElementById("task-desc").value;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: userEmail,
    }),
    headers: { "Content-type": "application/json" },
  });

  const task = await res.json();
  renderTask(task);
});

async function fetchTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const tasks = await res.json();
  tasks.filter((t) => t.userId == userEmail).forEach(renderTask);
}

function renderTask(task) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h4>${task.title}</h4>
    <p>${task.body}</p>
    <button onclick="deleteTask(${task.id})">Delete</button>
  `;
  taskList.appendChild(div);
}

window.deleteTask = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  location.reload();
};

fetchTasks();
