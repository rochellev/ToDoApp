import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ListItem from "./ListItem";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import dragIcon from "./drag-dots-icon.png";


// define sortable HOC to wrap my components
const DragHandle = sortableHandle(() => (
  <span>
    <img
      className={"delete-button drag-button"}
      src={dragIcon}
      alt={"drag button"}
    />
  </span>
));

// move the on focus here? as list item instead of divs

const SortableListItem = sortableElement(({ ...props }) => (
  <div
    className="todo"
    onFocus={props.handleInputFocus}
    onBlur={props.handleInputBlur}
 
   
  >
    <DragHandle />
    <ListItem
  
      key={props.id}
      index={props.index}
      content={props.content}
      isCompleted={props.isCompleted}
      handleKeyDown={props.handleKeyDown}
      updateTodoAtIndex={props.updateTodoAtIndex}
      toggleComplete={props.toggleComplete}
      removeTodoAtIndex={props.removeTodoAtIndex}
      isFocused={props.isFocused}
    />
  </div>
));

const SortableList = sortableContainer(({ ...props }) => (
  <div  className="todo-list">
    {props.todos.map((todoItem, i) => (
      <SortableListItem
        key={todoItem.id}
        index={i}
        shouldUseDragHandle={true}
        content={todoItem.content}
        isCompleted={todoItem.isCompleted}
        handleKeyDown={e => props.handleKeyDown(e, i)}
        updateTodoAtIndex={e => props.updateTodoAtIndex(e, i)}
        toggleComplete={e => props.toggleComplete(i)}
        removeTodoAtIndex={e => props.removeTodoAtIndex(i)}
        isFocused={todoItem.isFocused}
        handleInputFocus={e => props.handleInputFocus(i)}
        handleInputBlur={e => props.handleInputBlur(e, i)}
      />
    ))}
  </div>
));

function List() {
  // const [isFocused, setIsFocused] = useState(false);
  // runs when component is initialized, get todos from local storage

  // const [focusIndex, setFocusIndex] = useState(null);
  //const refItem = useRef(null);

  // going to move focused state outside. array of focused.
  const [focusIndex, setFocusIndex] = useState(() => {
    var restoredFocus = JSON.parse(localStorage.getItem("focusIndex"));

    if(!restoredFocus){
      restoredFocus = 0;
    }
    return restoredFocus;
  });

  useEffect(() => {
    localStorage.setItem("focusIndex", JSON.stringify(focusIndex));
  }, [focusIndex])

  const [todos, setTodos] = useState(() => {
    var restoredList = JSON.parse(localStorage.getItem("todoList"));

    if (!restoredList) {
      restoredList = [
        { content: "", isCompleted: false, id: uuidv4(), isFocused: false }
      ];
    }
    return restoredList;
  });

  // save todos in one object
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  // focus on index to refocus after render
  // useEffect(() => {
  //   if(focusIndex){
  //     // focus on the indexed list item
  //   }
  // });


  // event handlers
  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }
  // add empty todo item to todos
  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
      id: uuidv4(),
      isFocused: false
    });

    setTodos(newTodos);
    // wait for state to finish update before focusing on new rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  // handle the onChange in input
  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    // newTodos[i].isFocused = true;
    // setIsFocused(true);
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    //  if (i === 0 && todos.length === 1) return;
    if (i === 0 && todos.length === 1) {
      const newTodos = [...todos];
      newTodos.splice(0, 1, {
        content: "",
        isCompleted: false,
        id: uuidv4(),
        isFocused: false
      });
      setTodos(newTodos);
    } else {
      setTodos(todos =>
        todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
      );
    }

    setTimeout(() => {
      i === 0
        ? document.forms[0].elements[0].focus()
        : document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(i) {
    const tempTodos = [...todos];
    tempTodos[i].isCompleted = !tempTodos[i].isCompleted;
    setTodos(tempTodos);
  }

  function handleInputFocus(i) {
    console.log(`active element: ${document.activeElement.tagName}`)
    const tempTodos = [...todos];
    tempTodos[i].isFocused = true;
    setTodos(tempTodos);

    // todos[i].isFocused = true;
  }

  function handleInputBlur(e, i) {
   
    // e.stopPropagation();
    console.log(`active element: ${document.activeElement.tagName}`)
    const tempTodos = [...todos];
    tempTodos[i].isFocused = false;
    setTodos(tempTodos);


    // todos[i].isFocused = false;
  }

  const onListSortEnd = ({ oldIndex, newIndex }) =>
    setTodos(arrayMove(todos, oldIndex, newIndex));

  return (
    <form className="todo-list">
      <SortableList
        axis="y"
        onSortEnd={onListSortEnd}
        useDragHandle={true}
        todos={todos}
        handleKeyDown={(e, i) => handleKeyDown(e, i)}
        updateTodoAtIndex={(e, i) => updateTodoAtIndex(e, i)}
        toggleComplete={i => toggleTodoCompleteAtIndex(i)}
        removeTodoAtIndex={i => removeTodoAtIndex(i)}
        handleInputFocus={i => handleInputFocus(i)}
        handleInputBlur={(e, i) => handleInputBlur(e, i)}
      ></SortableList>
    </form>
  );
}

export default List;
