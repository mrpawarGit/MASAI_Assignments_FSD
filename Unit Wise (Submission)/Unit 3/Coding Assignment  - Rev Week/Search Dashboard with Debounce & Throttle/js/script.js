let api =
  "https://userdb-1a783-default-rtdb.asia-southeast1.firebasedatabase.app/names.json";
let students = [];

async function fetchData() {
  let res = await fetch(api);
  students = await res.json();

  dispData(students);
}

function dispData(data) {
  let contaier = document.getElementById("contaier");
  contaier.innerHTML = "";

  // if no match
  if (data.length === 0) {
    contaier.innerHTML = "<h4>No matches found.</h4>";
    return;
  }

  data.forEach((student) => {
    let div = document.createElement("div");

    div.innerHTML = `
      <h4>${student.name}</h4>
    `;
    contaier.appendChild(div);
  });
}

// debounce

let debounceTime;
let keystrokeDisp = document.getElementById("keystrokesCnt");
let keystrokeCnt = 0
let debounceDisp = document.getElementById("debounceCnt");
let debounceCnt = 0

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  keystrokeCnt++
  keystrokeDisp.innerText = keystrokeCnt
  clearTimeout(debounceTime);

  debounceTime = setTimeout(() => {
    debounceCnt++
    debounceDisp.innerText = debounceCnt
    let name = searchInput.value.toLowerCase();
    let filtered = students.filter((student) =>
      student.name.toLowerCase().includes(name)
    );

    dispData(filtered);
  }, 1000);
});

fetchData();

