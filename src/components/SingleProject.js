import React from "react"
import Button from "./Button"

const SingleProject = (props) => {
  return (
    <div className = "col-sm-4 col-md-4 text-center">
      <div className={ props.projectNameAsClass}>
        <h3>{ props.projectName}</h3>
        <p>{ props.projectInfo} </p>
        <div className = "row">
          <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
            <div className = "project-more-info">
              <Button text="More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProject