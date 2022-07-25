import React from 'react';


function Card(props) {
  return (
      <div classNameName='details-card'>
          <p>{props.name}</p>
          <p>{props.state}</p>
          <p>{props.stack}</p>
          <p>{props.description}</p>
    </div>
    )
}

export default Card