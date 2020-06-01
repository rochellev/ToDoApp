import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ListItem from "./ListItem";



function List() {
  
  // runs when component is initialized, get todos from local storage
  const [todos, setTodos] = useState( () => {
    const restoredList = [];
    const keys = Object.keys(localStorage);
    console.log(`keys.length = ${keys.length}`);
    if (keys.length === 0) {
      restoredList.push({ content: " ", isCompleted: false, id: uuidv4() });
    }
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        restoredList.push(JSON.parse(localStorage.getItem(key)));
    }
    return restoredList;
  });

  useEffect( () => {
    todos.forEach(item => {
      localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
    });
  }, [todos]);

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
    // copy because state not be directly mutated
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
      id: uuidv4()
    });
    setTodos(newTodos);
    // wait for state to finish update before focusing on new rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    console.log(`typeof= ${typeof todos[i].id}`)
    localStorage.removeItem(JSON.stringify(todos[i].id));
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );

    setTimeout(() => {
      document.forms[0].elements[i-1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(i) {
    const tempTodos = [...todos];
    tempTodos[i].isCompleted = !tempTodos[i].isCompleted;
    setTodos(tempTodos);
  }

  return (
    <form className="todo-list">
      <ul>
        {todos.map((todoItem, i) => (
        
            <ListItem
              key={todoItem.id}
              content={todoItem.content}
              isCompleted={todoItem.isCompleted}
              onKeyDown={e => handleKeyDown(e, i)}
              onChange={e => updateTodoAtIndex(e, i)}
              onClick={e => toggleTodoCompleteAtIndex(i)}
            />
        
        ))}
      </ul>
    </form>
  );
}

export default List;
