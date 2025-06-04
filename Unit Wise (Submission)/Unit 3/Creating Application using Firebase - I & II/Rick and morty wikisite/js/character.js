const detailContainer = document.getElementById("character-detail");
const urlParams = new URLSearchParams(window.location.search);
const charId = urlParams.get("id");

async function fetchCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const char = await res.json();

  detailContainer.innerHTML = `
    <img src="${char.image}" alt="${char.name}" />
    <h2>${char.name}</h2>
    <p><strong>Status:</strong> ${char.status}</p>
    <p><strong>Species:</strong> ${char.species}</p>
    <p><strong>Type:</strong> ${char.type || "N/A"}</p>
    <p><strong>Gender:</strong> ${char.gender}</p>
    <p><strong>Origin:</strong> ${char.origin.name}</p>
    <p><strong>Location:</strong> ${char.location.name}</p>
    <p><strong>Episode Count:</strong> ${char.episode.length}</p>
  `;
}

fetchCharacter(charId);
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
