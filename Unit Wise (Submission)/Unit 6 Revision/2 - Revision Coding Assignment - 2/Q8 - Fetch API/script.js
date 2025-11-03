const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function handleSearch() {
  const searchTxt = document.getElementById("searchTxt").value;
  searchByName(searchTxt);
}

async function searchByName(mealName) {
  try {
    const res = await fetch(`${api_url}${mealName}`);
    const data = await res.json();
    renderData(data.meals);
  } catch (err) {
    console.error("Error fetching meals:", err);
  }
}

searchByName("a");

function renderData(meals) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  if (!meals) {
    container.innerHTML = `<h3>No Meals Found</h3>`;
    return;
  }

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.className = "foodbox";

    div.innerHTML = `
      <div style="
        border:1px solid #aaa;
        width:200px;
        padding:10px;
        margin:10px;
        border-radius:8px;
      ">
        <img src="${meal.strMealThumb}" width="180" style="border-radius:8px"/>
        <h3>${meal.strMeal}</h3>
      </div>
    `;

    container.appendChild(div);
  });
}
