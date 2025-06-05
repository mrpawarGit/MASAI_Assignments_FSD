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

fetchCharacter();
