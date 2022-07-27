import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  const fetchSinglePost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setSinglePost(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSinglePost();
  }, []);
  return (
    <div className="blogContainer">
      <h1>PwC Blog</h1>
      <hr />
      <h4>{singlePost.title}</h4>
      <hr />
      <div className="post-body">
        <p>{singlePost.body}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
