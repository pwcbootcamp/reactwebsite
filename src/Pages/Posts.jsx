import React, { useState, useEffect } from "react";
import CardPost from "./CardPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((posts) => setPosts(posts));
    fetchPost();
  }, []);
  return (
    <section className="posts">
      <div>
        <h2>hi this is posts</h2>
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>userid</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="card_posts">
        {posts.map((post, index) => (
          <CardPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
