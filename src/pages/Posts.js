import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
  }, [posts]);

  return (
    <div>
      <h2>This is my Post</h2>

      {/* <h2>This is my Post</h2>
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))} */}

      <div className="card-post">
        {posts.map((item, index) => (
          <PostCard title={item.title} body={item.body} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
