const grid = document.getElementById("character-grid");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let currentPage = 1;

async function fetchCharacters(page = 1) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await res.json();
  renderCharacters(data.results);
  nextBtn.disabled = !data.info.next;
  prevBtn.disabled = !data.info.prev;
}

function renderCharacters(characters) {
  grid.innerHTML = "";
  characters.forEach((char) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" />
      <h3>${char.name}</h3>
      <p>${char.species} - ${char.status}</p>
      <a href="character.html?id=${char.id}" target="_blank">Details</a>
    `;
    grid.appendChild(card);
  });
}

nextBtn.addEventListener("click", () => {
  currentPage++;
  fetchCharacters(currentPage);
});
prevBtn.addEventListener("click", () => {
  currentPage--;
  fetchCharacters(currentPage);
});

fetchCharacters();
updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("clock").textContent =
    now.toLocaleTimeString() + " " + now.toLocaleDateString(undefined, options);
}
