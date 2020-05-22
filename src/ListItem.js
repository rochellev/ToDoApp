import React from "react";
import "./App.css";

function ListItem(props) {
  return (
    <div className={`todo ${props.isCompleted && 'todo-is-completed'}`}>
      <div className={'checkbox'} onClick={props.onClick} >
      {props.isCompleted && <span>&#x2714;</span>}
    </div>
      <input type="text" value={props.content} onKeyDown={props.onKeyDown} onChange={props.onChange}/>
    </div>
  );
}

export default ListItem;