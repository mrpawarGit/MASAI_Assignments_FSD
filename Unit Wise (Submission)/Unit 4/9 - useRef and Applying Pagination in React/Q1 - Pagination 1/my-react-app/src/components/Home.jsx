import React, { useEffect, useState } from "react";

export default function Home() {
  const [charcters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page == 0) setPage(1);
    fetchData();
  }, [page]);

  async function fetchData() {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    // console.log(data.results);
    setCharacters(data.results);
  }

  return (
    <div>
      <h2>Rickand & Morty</h2>
      {charcters.map((character) => (
        <div key={character.id}>
          <img src={character.image} />
          <h4>{character.name}</h4>
        </div>
      ))}
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page == 1}>
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
