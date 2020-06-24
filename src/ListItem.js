import React from "react";
import "./App.css";
import deleteIcon from "./delete-icon.png";

// onFocus={props.handleInputFocus}
// onBlur={props.handleInputBlur}

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
        onFocus={props.handleInputFocus}
        onBlur={props.handleInputBlur}
      />
      {props.isFocused && 
       <img className={"delete-button"} src={deleteIcon} alt={"delete button"} onClick={props.removeTodoAtIndex}/>
      }
    </div>
  );
}



export default ListItem;
