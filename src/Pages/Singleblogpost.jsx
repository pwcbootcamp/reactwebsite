import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singleblogpost = () => {
  const [singleblogpost, setSinglebogpost] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchSingleblogpost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = await res.json();
        console.log(data);
        setSinglebogpost(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleblogpost();
  }, [id]);

  return (
    <section className="container" style={{ color: "black" }}>
      <h1>PwC Blog Post</h1>
      <hr />
      <h4>{singleblogpost.title}</h4>
      <hr />
      <div className="postbody">
        <p>{singleblogpost.body}</p>
      </div>
    </section>
  );
};

export default Singleblogpost;
