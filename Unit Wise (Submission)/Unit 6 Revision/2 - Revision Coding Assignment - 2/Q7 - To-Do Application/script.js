let ul = document.getElementById("container");

function addText() {
  let text = document.getElementById("textInput").value;
  let li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
  clearText();
}

function clearText() {
  document.getElementById("textInput").value = "";
}
