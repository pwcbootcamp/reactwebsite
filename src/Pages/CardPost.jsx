import React from "react";
import { Link } from "react-router-dom";

const CardPost = ({ post }) => {
  const excerpt = (str) => {
    return str.length > 80 ? str.substring(0, 80) + "..." : str;
  };

  return (
    <div key={post.id} className="cardPost">
      <h2>{post.id}</h2>
      <h3>{post.title}</h3>
      <p> {excerpt(post.title)}</p>
      <Link to={`/singleblogpost/${post.id}`}>
        <button className="post-btn">Read more</button>
      </Link>
    </div>
  );
};

export default CardPost;
