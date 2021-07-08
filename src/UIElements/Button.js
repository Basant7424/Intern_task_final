import React from 'react';
import '../App.css'
const Button = ({text, fontColor, fontSize}) => <button style={{color : fontColor}} className={"button"}>{text}</button>

export default Button;