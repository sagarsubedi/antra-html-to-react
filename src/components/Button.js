import React from "react";

const Button = (props) => {
  return <a className={`btn btn-default ${props.text==="Contact" ? "btn-black-border" : "btn-border" }`} href="#" alt="button">{props.text}</a>;
}

export default Button;