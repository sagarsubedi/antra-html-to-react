import React from "react"

const SocialMediaLogo = (props) => {
  return (
    <div className={`col-sm-1 col-md-1 ${props.isFirst && "col-sm-offset-4 col-md-offset-4"}`}>
							<div className ={props.name}>
                <a href="#"><img className="img-responsive" src={ props.image} alt={`${props.name} logo`} /></a>
							</div>
						</div>
  )
}

export default SocialMediaLogo