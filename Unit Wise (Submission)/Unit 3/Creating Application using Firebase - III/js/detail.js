// url
let url = localStorage.getItem("charUrl");

async function fetchCharacter() {
  if (url) {
    let res = await fetch(url);
    let char = await res.json();

    let div = document.getElementById("charDetail");
    div.innerHTML = `
      <img src="${char.image}" />
      <h3>${char.name}</h3>
      <p><strong>Species:</strong> ${char.species}</p>
      <p><strong>Gender:</strong> ${char.gender}</p>
      <p><strong>Height:</strong> ${char.height} cm</p>
      <p><strong>Homeworld:</strong> ${char.homeworld}</p>
    `;
  }
}

document.getElementById("theme").addEventListener("change", (e) => {
  document.body.className = e.target.value;
  localStorage.setItem("theme", e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
    document.getElementById("theme").value = savedTheme;
  }
  fetchCharacter();
});
