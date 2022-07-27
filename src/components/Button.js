import React from 'react'

const Button = ({text, color}) => {
  return (
    <div style={{backgroundColor: color}}>
        <button>{text}</button>
    </div>
  )
}

export default Button