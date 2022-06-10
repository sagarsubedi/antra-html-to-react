import React from "react"

const NavbarLink = (props) => { 
  if (props.isH4) {
    return <h4><a href={props.url}>{ props.text}</a></h4>
  }
  return <li><a href={props.url}>{ props.text}</a></li>
}

export default NavbarLink