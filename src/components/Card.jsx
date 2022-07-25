import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <p>
          <b>Name:</b> {props.name}
        </p>
        <p>
          <b>State of Origin:</b> {props.stateOfOrigin}
        </p>
        <p>
          <b>Stack:</b> {props.stack}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
