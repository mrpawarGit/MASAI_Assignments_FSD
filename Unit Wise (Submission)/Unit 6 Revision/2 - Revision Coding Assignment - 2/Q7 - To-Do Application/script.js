let ul = document.getElementById("container");

function addText() {
  let text = document.getElementById("textInput").value.trim();
  if (!text) return alert("Enter something!");

  let li = document.createElement("li");
  li.className = "li";

  li.innerHTML = `
    <input type="checkbox" class="checkbox" /> 
    <span class="task">${text}</span>
    <button class="deleteBtn">Delete</button>
  `;

  ul.appendChild(li);
  clearText();
}

function clearText() {
  document.getElementById("textInput").value = "";
}

ul.addEventListener("click", (e) => {
  // Delete
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }

  // Checkbox
  if (e.target.classList.contains("checkbox")) {
    let task = e.target.nextElementSibling;
    task.classList.toggle("completed");
  }
});
