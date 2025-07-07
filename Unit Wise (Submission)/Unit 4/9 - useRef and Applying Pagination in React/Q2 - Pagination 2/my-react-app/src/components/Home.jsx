import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  // for 10 items
  const itemsPerPage = 10;
  const lastPage = currentPage * itemsPerPage;
  const firstPage = lastPage - itemsPerPage;
  const currentItems = lists.slice(firstPage, lastPage);

  // for buttons of page numbers
  const totalPages = Math.ceil(lists.length / itemsPerPage);
  const pageNum = Array.from({ length: totalPages }, (ele, i) => i + 1);
  // console.log(pageNum);


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
      {pageNum.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          style={{
            margin: "5px",
            backgroundColor: num == currentPage ? "green" : "grey",
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Home;
