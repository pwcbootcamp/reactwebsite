import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchSinglePost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setSinglePost(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSinglePost();
  }, []);
  return (
    <>
      <div className="blogContainer">
        {isLoading ? (
          <h3 style={{ textAlign: "center" }}>Loading ...</h3>
        ) : (
          <div>
            {" "}
            <h1>PwC Blog</h1>
            <hr />
            <h4>{singlePost.title}</h4>
            <hr />
            <div className="post-body">
              <p>{singlePost.body}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleBlogPage;
