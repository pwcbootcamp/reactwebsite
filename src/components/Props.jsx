//name, state of origin, stack and a decription

import React from 'react';
import "./Card.css";

// using the arrow function
// the arrow function is the same as the normal function
const Card = (props) => {
    return (
        <div className="cardDetails">
            <p>{props.name}</p>;
            <p>{props.state}</p>
            <p>{props.stack}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default Card