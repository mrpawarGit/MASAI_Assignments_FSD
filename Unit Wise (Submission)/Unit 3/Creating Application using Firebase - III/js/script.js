
let api = "https://akabab.github.io/starwars-api/api/all.json"

async function fetchData(){
  let res = await fetch(api)
  let data = await res.json()
  
  console.log(data)
}

window.addEventListener("DOMContentLoaded",fetchData())