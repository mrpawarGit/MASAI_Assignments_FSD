const OMDB_API_KEY = "YOUR_OMDB_API_KEY"; //
const OMDB_BASE = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

let state = { query: "", page: 1, totalPages: 1, isFetching: false };

const $search = document.querySelector("#search");
const $grid = document.querySelector("#grid");
const $loader = document.querySelector("#loader");
const $msg = document.querySelector("#message");
const $prev = document.querySelector("#prevBtn");
const $next = document.querySelector("#nextBtn");
const $pageInfo = document.querySelector("#pageInfo");

// Debounce function
function debounce(fn, delay = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle function
function throttle(fn, limit = 700) {
  let inThrottle = false;
  let lastArgs;
  return function (...args) {
    if (!inThrottle) {
      inThrottle = true;
      fn.apply(this, args);
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          fn.apply(this, lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      lastArgs = args;
    }
  };
}

// Fetch movies
async function fetchMovies(query, page = 1) {
  if (!OMDB_API_KEY || OMDB_API_KEY === "a6cd7dd9") {
    showMessage("Add your OMDb API key in script.js to load results.");
    return;
  }

  try {
    setLoading(true);
    const res = await fetch(
      `${OMDB_BASE}&s=${encodeURIComponent(query)}&page=${page}`
    );
    const data = await res.json();

    if (data.Response === "False") {
      showMessage(data.Error || "No movies found.");
      renderMovies([]);
      updatePagination(1, 1);
      return;
    }

    hideMessage();
    const totalPages = Math.ceil((Number(data.totalResults) || 0) / 10);
    updatePagination(page, totalPages);
    renderMovies(data.Search || []);
  } catch (err) {
    console.error(err);
    showMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

// Render movies
function renderMovies(list) {
  $grid.innerHTML = "";
  if (!list || list.length === 0) return;

  const frag = document.createDocumentFragment();
  list.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "poster";
    img.alt = `${movie.Title} poster`;
    img.src = movie.Poster !== "N/A" ? movie.Poster : placeholder(movie.Title);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = movie.Title;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `
      <span class="badge">${movie.Year}</span>
      <span class="badge">${movie.Type.toUpperCase()}</span>
    `;

    body.append(title, meta);
    card.append(img, body);
    frag.append(card);
  });
  $grid.append(frag);
}

function placeholder(title = "") {
  const t = encodeURIComponent((title[0] || "?").toUpperCase());
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'><rect width='100%' height='100%' fill='%230f1530'/><text x='50%' y='50%' fill='%238893aa' font-size='120' text-anchor='middle' dominant-baseline='middle'>${t}</text></svg>`;
}

function setLoading(v) {
  $loader.hidden = !v;
}
function showMessage(txt) {
  $msg.textContent = txt;
  $msg.hidden = false;
}
function hideMessage() {
  $msg.hidden = true;
  $msg.textContent = "";
}

function updatePagination(page, totalPages) {
  state.page = page;
  state.totalPages = totalPages;
  $pageInfo.textContent = `Page ${page} of ${totalPages}`;
  $prev.disabled = page <= 1;
  $next.disabled = page >= totalPages;
}

// Event handlers
const handleSearch = debounce((e) => {
  state.query = e.target.value.trim();
  fetchMovies(state.query || randomSeed(), 1);
}, 500);

const handlePrev = throttle(() => {
  if (state.page > 1) fetchMovies(state.query || randomSeed(), state.page - 1);
}, 800);

const handleNext = throttle(() => {
  if (state.page < state.totalPages)
    fetchMovies(state.query || randomSeed(), state.page + 1);
}, 800);

function randomSeed() {
  const list = ["star", "love", "war", "night", "king", "man", "hero", "black"];
  return list[Math.floor(Math.random() * list.length)];
}

// Init
function init() {
  $search.addEventListener("input", handleSearch);
  $prev.addEventListener("click", handlePrev);
  $next.addEventListener("click", handleNext);
  fetchMovies(randomSeed(), 1);
}

window.addEventListener("DOMContentLoaded", init);
