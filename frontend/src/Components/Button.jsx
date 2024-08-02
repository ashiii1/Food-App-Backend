import React from 'react'
import "../Components/Button.css"
const Button = ({buttonClick, btnText}) => {
  return (
    <button className='btn' onClick={buttonClick} >{btnText}</button>
  )
}

export default Button