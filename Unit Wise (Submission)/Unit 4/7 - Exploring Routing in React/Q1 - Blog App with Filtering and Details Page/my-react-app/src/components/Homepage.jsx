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

  const postContainer = {
    margin: "20px",
    padding: "15px",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
  };

  const postBox = {
    border: "2px solid",
    borderRadius: "8px",
    padding: "20px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Posts</h1>
      <div style={postContainer}>
        {posts.map((post) => (
          <div key={post.id} style={postBox}>
            <h5>{post.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
