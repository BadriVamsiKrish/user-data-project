import React from "react";
import './Invalid.css';
export const Invalid = (props) => {
  return(
    <div className="Invalid">
      <div className="heading"><h2>Invalid input</h2></div>
      <div className="h3">
        <h3>{props.msg}</h3>
        <button onClick={()=>{
          console.log('in okay btn');
          props.onCheck('');
        }}>Okay</button>
      </div>
    </div>
  )
  
}