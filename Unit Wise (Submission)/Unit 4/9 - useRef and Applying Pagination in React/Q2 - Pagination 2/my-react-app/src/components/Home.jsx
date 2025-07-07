import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastPage = currentPage * itemsPerPage;
  const firstPage = lastPage - itemsPerPage;
  const currentItems = lists.slice(firstPage, lastPage);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(res.data);
    setLists(res.data);
  }

  return (
    <div>
      <h2>TODO LIST</h2>
      <ul>
        {currentItems.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
