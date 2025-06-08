import { auth, db } from "../firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("add-btn");
  const logoutBtn = document.getElementById("logout-button");
  let currentUser = null;

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "index.html";
      return;
    }

    currentUser = user;
    document.getElementById("username").innerText = currentUser.email;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      loadNotes();
    } else {
      window.location.href = "index.html";
    }
  });

  async function loadNotes() {
    taskList.innerHTML = "";
    const notesRef = collection(db, "notes");
    const snapshot = await getDocs(notesRef);

    snapshot.forEach((docSnap) => {
      const note = docSnap.data();
      if (note.userId === currentUser.uid) {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.innerHTML = `<p>${note.content}</p>`;
        taskList.appendChild(noteDiv);
      }
    });
  }

  addBtn.addEventListener("click", async () => {
    const content = taskInput.value.trim();
    if (!content) return;

    await addDoc(collection(db, "notes"), {
      content,
      userId: currentUser.uid,
      userEmail: currentUser.email,
      createdAt: new Date(),
    });

    taskInput.value = "";
    loadNotes();
  });

  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
  });
});
