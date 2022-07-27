import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const excerpt = (string) => {
    return string.length > 80 ? string.substring(0, 80) + "..." : string;
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

export default Card;
