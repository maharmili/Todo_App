
import React, { useState } from "react";

const TodoInput = (props) => {
const[inputText,setInputText]=useState('');

const handleEnterPress=(e)=>{
  if(e.keyCode===13){
    props.addList(inputText)
    setInputText("")
  }
}

console.log(inputText)
const changeInputText=(e)=>{
  setInputText(e.target.value)
}

  return <div className="input-container">
    <input type="text" 
    value={inputText}
    className="input-box-todo" 
     placeholder="Enter your todo"
     onChange={changeInputText}
     onKeyDown={handleEnterPress}
    />
    <button className="add-btn" onClick={()=>{
      props.addList(inputText)
      setInputText("")
      }}>+</button>
  </div>;
};

export default TodoInput;
