const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let allMeals = [];

function sortAll(order) {
  if (order == "asc") {
    allMeals = allMeals.sort((a, b) =>
      a.strMeal.toLowerCase().localeCompare(b.strMeal.toLowerCase())
    );
  } else {
    allMeals = allMeals.sort((a, b) =>
      b.strMeal.toLowerCase().localeCompare(a.strMeal.toLowerCase())
    );
  }

  renderData(allMeals);
}

async function handleSearch() {
  const searchTxt = document.getElementById("searchTxt").value;
  const res = await fetch(`${api_url}${searchTxt}`);
  const data = await res.json();
  allMeals = data.meals || [];
  renderData(allMeals);
}

searchByName("a");

async function searchByName(mealName) {
  const res = await fetch(`${api_url}${mealName}`);
  const data = await res.json();
  allMeals = data.meals || [];
  renderData(allMeals);
}

function renderData(meals) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  if (!meals || meals.length === 0) {
    container.innerHTML = `<h3>No Meals Found</h3>`;
    return;
  }

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.className = "foodbox";

    div.innerHTML = `
      <img src="${meal.strMealThumb}" />
      <h3>${meal.strMeal}</h3>
      <p>${meal.strCategory}</p>
    `;

    container.appendChild(div);
  });
}

function filterMeals(type) {
  if (!allMeals) return;

  if (type === "veg") {
    const vegMeals = allMeals.filter(
      (meal) => meal.strCategory === "Vegetarian"
    );
    renderData(vegMeals);
  } else {
    const nonVegMeals = allMeals.filter((meal) =>
      ["Beef", "Chicken", "Goat", "Lamb", "Pork", "Seafood"].includes(
        meal.strCategory
      )
    );
    renderData(nonVegMeals);
  }
}
