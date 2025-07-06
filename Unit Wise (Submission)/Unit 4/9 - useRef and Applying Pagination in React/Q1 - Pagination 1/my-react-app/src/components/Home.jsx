import React, { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [uiPage, setUiPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiPage = Math.ceil(uiPage / 2);

  useEffect(() => {
    fetchData();
  }, [apiPage]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${apiPage}`
      );
      const data = await res.json();
      setCharacters(data.results || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
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

  const startIndex = uiPage % 2 === 1 ? 0 : 10;
  const endIndex = startIndex + 10;
  const visibleCharacters = characters.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Rick and Morty</h1>
      {loading && <p>Loading...</p>}
      {!loading &&
        visibleCharacters.map((character) => (
          <div key={character.id} style={charbox}>
            <img src={character.image} style={imgbox} alt={character.name} />
            <h4>{character.name}</h4>
          </div>
        ))}

      <br />
      <button
        onClick={() => setUiPage((prev) => prev - 1)}
        disabled={uiPage === 1}
        style={{ marginRight: "20px" }}
      >
        Prev
      </button>
      <button onClick={() => setUiPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
