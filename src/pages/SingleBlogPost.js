import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleBlogPost.css";

const SingleBlogPost = (title, body) => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  async function fetchData() {
    try {
      await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setSinglePost(data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [singlePost]);

  return (
    <div className="blog-container">
      <h1 className="title">{singlePost.title}</h1>
      <div className="post-content">
        <p>{singlePost.body}</p>
      </div>
    </div>
  );
};

export default SingleBlogPost;
