import React from "react"

const SingleSummary = (props) => {
  return (
    <div className={`${props.summaryTitle}-summary`}>
      <div className={`col-sm-1 col-md-1 ${props.offset && "col-sm-offset-2 col-md-offset-2"}`}>
              <div className="development-img">
                <img className="img-responsive" src={props.image} alt={ props.summaryTitle}/>
              </div>
            </div>

            <div className="col-sm-4 col-md-4">
              <div className={`${props.summaryTitle}-description`}>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
  )
}

export default SingleSummary