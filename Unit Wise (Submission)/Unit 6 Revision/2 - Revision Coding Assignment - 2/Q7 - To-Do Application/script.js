let ul = document.getElementById("container");

function addText() {
  let text = document.getElementById("textInput").value;
  let li = document.createElement("li");

  li.innerHTML = `${text}  <button class="deleteBtn">Delete</button>`;
  ul.appendChild(li);
  clearText();
}

function clearText() {
  document.getElementById("textInput").value = "";
}

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
});
