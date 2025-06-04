let api = `https://studentdb-701b6-default-rtdb.asia-southeast1.firebasedatabase.app/students.json`;

async function fetchData() {
  let res = await fetch(api);
  let data = await res.json()

  console.log(data)
}

addEventListener("DOMContentLoaded", () => fetchData());
