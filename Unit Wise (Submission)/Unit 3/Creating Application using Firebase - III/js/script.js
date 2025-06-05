let api = "https://akabab.github.io/starwars-api/api/all.json";
let currentPage = 1;
let postPerPage = 6;
let data = [];

async function fetchData() {
  let res = await fetch(api);
  data = await res.json();
  dispData();
}

function dispData() {
  let container = document.getElementById("container");
  container.innerHTML = "";

  let start = (currentPage - 1) * postPerPage;
  let end = start + postPerPage;
  let currPageData = data.slice(start, end);

  currPageData.forEach((ele) => {
    let charBox = document.createElement("div");
    charBox.className = "charBox";

    charBox.innerHTML = `
      <img src="${ele.image}" alt="${ele.name}">
      <h4>${ele.name}</h4>
      <p>${ele.species} - ${ele.gender}</p>
    `;

    charBox.addEventListener("click", () => {
      let charDataUrl = `https://akabab.github.io/starwars-api/api/id/${ele.id}.json`;
      localStorage.setItem("charUrl", charDataUrl);
      window.location.href = "detail.html";
    });

    container.appendChild(charBox);
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    dispData();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage * postPerPage < data.length) {
    currentPage++;
    dispData();
  }
});

window.addEventListener("DOMContentLoaded", fetchData);
