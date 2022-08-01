import React, { useEffect, useState } from "react";
import Card from "./Card";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, [posts]);
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>Posts</h1>
      {isLoading ? (
        <h3 style={{ textAlign: "center" }}>Loading..</h3>
      ) : (
        <div className="post-card">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
            // <h3 key={post.id}>{post.title}</h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
