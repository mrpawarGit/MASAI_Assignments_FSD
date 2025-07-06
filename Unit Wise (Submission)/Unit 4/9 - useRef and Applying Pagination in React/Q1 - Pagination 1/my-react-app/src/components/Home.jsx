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

  const charbox = {
    border: "1px solid",
    padding: "20px",
    display: "inline-block",
    margin: "10px",
    borderRadius: "8px",
  };

  const imgbox = {
    height: "200px",
    width: "200px",
    border: "1px solid",
  };

  return (
    <div>
      <h1>Rickand & Morty</h1>
      {charcters.map((character) => (
        <div key={character.id} style={charbox}>
          <img src={character.image} style={imgbox} />
          <h4>{character.name}</h4>
        </div>
      ))}
      <br />
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page == 1}
        style={{ marginRight: "20px" }}
      >
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
