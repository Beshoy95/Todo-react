import React from 'react';
import "./Button.css";

function Button(props) {
  const{variant='primary',children,...rest} =props

  return (
    <div>
      <button className={`button ${variant}`} {...rest}>
         Add Todo
      </button>
    </div>
  )
}

export default Button

