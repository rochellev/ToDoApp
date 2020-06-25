import React from "react";
import "./App.css";




function ListItem(props) {
  return (
    <div className={`todo ${props.isCompleted && "todo-is-completed"}`}>
      <div className={"checkbox"} onClick={props.toggleComplete}>
        {props.isCompleted && <span>&#x2714;</span>}
      </div>
      <input
        type="text"
        value={props.content}
        onKeyDown={props.handleKeyDown}
        onChange={props.updateTodoAtIndex}
      />

    </div>
  );
}



export default ListItem;


// onClick={props.handleInputFocus}
//         onBlur={props.handleInputBlur}