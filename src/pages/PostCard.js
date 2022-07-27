import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const excerpt = (str) => {
    return str.length > 80 ? str.substring(0, 80) + "..." : str;
  };
  return (
    <div className="card-wrapper">
      <div className="card">
        <h4 className="title">{props.title}</h4>
        <p className="body">{excerpt(props.body)}</p>

        <Link to={`/single-blog-post/${props.id}`}>
          <button className="blog-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
