import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "./icons/logo.svg";
import "./App.css";
import List from "./components/List";
import AboutMe from "./components/AboutMe";

const myTodos = [
  [
    {
      content: "my list 1",
      isCompleted: false,
      id: uuidv4(),
      isFocused: false
    },
    { content: "dishes", isCompleted: false, id: uuidv4(), isFocused: false },
    {
      content: "water lemon tree",
      isCompleted: true,
      id: uuidv4(),
      isFocused: false
    },
    { content: "clean mug", isCompleted: false, id: uuidv4(), isFocused: false }
  ],
  [
    {
      content: "my list 2",
      isCompleted: false,
      id: uuidv4(),
      isFocused: false
    },
    {
      content: "row the rower",
      isCompleted: false,
      id: uuidv4(),
      isFocused: false
    }
  ]
];




function App() {
  // 2D array
  const [todoGroup, setTodoGroup] = useState(myTodos);
  console.log(todoGroup);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <List todos={todoGroup[0]} />
      <AboutMe />
    </div>
  );
}

export default App;
