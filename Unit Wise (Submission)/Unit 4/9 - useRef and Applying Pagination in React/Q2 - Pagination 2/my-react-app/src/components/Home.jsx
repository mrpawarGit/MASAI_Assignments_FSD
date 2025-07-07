import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const lastPage = currentPage * itemPerPage;
  const firstPage = lastPage - itemPerPage;

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
        <ul>
          {lists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </ul>
        {/*  */}
      </ul>
    </div>
  );
}

export default Home;
