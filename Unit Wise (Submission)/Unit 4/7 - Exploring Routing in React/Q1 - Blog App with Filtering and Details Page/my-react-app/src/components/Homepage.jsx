import React, { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();

    setPosts(data.posts);
  }

  return (
    <>
      <div>
        <h2>Posts</h2>
        
      </div>
    </>
  );
}

export default Homepage;
