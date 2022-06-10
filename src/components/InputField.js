import React from "react"

const InputField = (props) => {
  const columnNumber = props.large ? "12" : "6";
  var fieldType = ""
  if(props.textArea){ 
    fieldType = <textarea placeholder={props.placeholder}></textarea>
  }else{
    fieldType = <input type={ props.type} placeholder={props.placeholder} />
  }

  return (
    <div className = {`col-sm-${columnNumber} col-md-${columnNumber}`}>
      <div className={props.fieldClassName}>
        <h4>{`${props.fieldName} *`}</h4>
        { fieldType}
      </div>
    </div>

  )
}

export default InputField