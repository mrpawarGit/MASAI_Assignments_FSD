const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function handleSearch() {
  const searchTxt = document.getElementById("searchTxt").value;
  searchByName(searchTxt);
}

async function searchByName(mealName) {
  try {
    const res = await fetch(`${api_url}${mealName}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching meals:", err);
  }
}

async function renderData() {}
