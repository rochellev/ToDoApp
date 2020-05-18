import React from "react";
import "./App.css";

function ListItem(props) {
  return (
    <div className={`todo ${props.isCompleted && "todo-is-completed"}`}>
      <Checkbox isCompleted={props.isCompleted} />
      <input type="text" />
    </div>
  );
}

function Checkbox(props) {
  return (
    <div className={"checkbox"}>
      {props.isCompleted && <span>&#x2714;</span>}
    </div>
  );
}


export default ListItem;
