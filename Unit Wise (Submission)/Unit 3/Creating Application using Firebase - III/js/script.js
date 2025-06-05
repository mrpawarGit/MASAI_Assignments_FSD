
let api = "https://akabab.github.io/starwars-api/api/all.json"

async function fetchData(){
  let res = await fetch(api)
  let data = await res.json()
  
  dispData(data)
}

function dispData(data){
  let container = document.getElementById("container")
  container.innerHTML = ""

  data.forEach(ele=>{
    let charBox = document.createElement('div');
    charBox.className = 'charBox'
    
    charBox.innerHTML = `
      <img src="${ele.image}" alt="${ele.image}">
      <h4>${ele.name}</h4>
      <p>${ele.species} - ${ele.gender}</p>
    `
    container.appendChild(charBox)
  })

}

window.addEventListener("DOMContentLoaded",fetchData())