import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Home() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRef = useRef([]);

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

  // to focus on 1st page on first load or reload 
  useEffect(() => {
    if (pageRef.current[0]) {
      pageRef.current[0].focus();
    }
  }, [lists]);

  // for foucs when page changed
  useEffect(() => {
    const currentBtn = pageRef.current[currentPage - 1];
    if (currentBtn) {
      currentBtn.focus();
    }
    console.log("Foucs changed");
  }, [currentPage]);

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
      {pageNum.map((num, index) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          ref={(el) => (pageRef.current[index] = el)}
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
