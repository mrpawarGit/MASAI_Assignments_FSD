let api =
  "https://userdb-1a783-default-rtdb.asia-southeast1.firebasedatabase.app/names";
let students = [];

async function fetchData() {
  let res = await fetch(api + ".json");
  students = await res.json();

  dispData();
}

function dispData() {}

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
});

fetchData();
