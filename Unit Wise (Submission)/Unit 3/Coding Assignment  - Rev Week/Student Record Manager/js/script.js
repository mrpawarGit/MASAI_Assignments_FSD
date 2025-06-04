let api = `https://studentdb-701b6-default-rtdb.asia-southeast1.firebasedatabase.app/students.json`;

async function fetchData() {
  let res = await fetch(api);
  let students = await res.json()
  let tbody = document.getElementById('tbody')
  tbody.innerHTML = ""

  students.forEach(student=>{
    let div = document.createElement('tbody')
    div.className = 'student-row';
    

  })
}

addEventListener("DOMContentLoaded", () => fetchData());
