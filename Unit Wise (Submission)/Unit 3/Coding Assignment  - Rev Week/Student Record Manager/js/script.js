let api = `https://studentdb-701b6-default-rtdb.asia-southeast1.firebasedatabase.app/students.json`;

async function fetchData() {
  let res = await fetch(api);
  let students = await res.json();
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  students.forEach((student) => {
    let tr = document.createElement("tr");
    tr.className = "student-row";

    tr.innerHTML = `
        <td>${student.Name}</td>
        <td>${student.Batch}</td>
        <td>${student.Age}</td>
        <td>${student.Score}</td>
        <td>Edit/Delete</td>
    `;

    tbody.appendChild(tr)
  });
}

addEventListener("DOMContentLoaded", () => fetchData());
