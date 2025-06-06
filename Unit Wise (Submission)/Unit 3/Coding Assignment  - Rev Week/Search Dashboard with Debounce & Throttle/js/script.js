let api =
  "https://userdb-1a783-default-rtdb.asia-southeast1.firebasedatabase.app/names.json";
let students = [];

async function fetchData() {
  let res = await fetch(api);
  students = await res.json();

  dispData();
}

function dispData() {}

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  let filtered = students.filter(
    (student) => student.name.toLowerCase() == searchInput.value.toLowerCase()
  );

  console.log(filtered);
});

fetchData();
