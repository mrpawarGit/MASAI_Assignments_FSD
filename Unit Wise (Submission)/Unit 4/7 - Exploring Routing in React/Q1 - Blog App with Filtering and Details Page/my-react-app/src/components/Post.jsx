import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;
  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
