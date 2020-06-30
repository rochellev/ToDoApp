import React, { useState, useRef, useEffect } from "react";
import "./List.css";
import deleteIcon from "../icons/delete-icon.png";

function ListItem(props) {
  const [isFocused, setIsFocused] = useState(false);

  function toggleFocused() {
    setIsFocused(!isFocused);
  }
  const inputRef = useRef(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <div
      onMouseEnter={toggleFocused}
      onMouseLeave={toggleFocused}
      className={`todo ${props.isCompleted && "todo-is-completed"}`}
    >
      <div className={"checkbox"} onClick={props.toggleComplete}>
        {props.isCompleted && <span>&#x2714;</span>}
      </div>
      <input
        type="text"
        ref={inputRef}
        value={props.content}
        onKeyDown={props.handleKeyDown}
        onChange={props.updateTodoAtIndex}
      />
      {isFocused && (
        <img
          className={"delete-button"}
          src={deleteIcon}
          alt={"delete button"}
          onClick={props.removeTodoAtIndex}
        />
      )}
    </div>
  );
}

export default ListItem;
