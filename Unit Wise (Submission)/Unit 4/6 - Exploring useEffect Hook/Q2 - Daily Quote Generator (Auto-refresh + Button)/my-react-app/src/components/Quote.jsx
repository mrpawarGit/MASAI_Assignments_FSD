import React, { useState } from "react";

function Quote() {
  const [quote, setQuote] = useState([]);

  async function fetchData() {
    const res = await fetch("http://api.quotable.io/random");
    const data = await res.json();

    setQuote(data);
  }

  useState(() => {
    fetchData();

    let auto = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(auto);
  }, []);

  return (
    <>
      <div>
        <h2>Daily Quote Generator</h2>
        <div key={quote.id}>
          <p>"{quote.content}"</p>
          <p>- {quote.author}</p>
        </div>
        <button onClick={fetchData}>Get New</button>
      </div>
    </>
  );
}

export default Quote;
