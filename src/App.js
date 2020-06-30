import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AboutMe from "./components/AboutMe";

function App() {

  const [todos, setTodos] = useState(() => {
    var restoredList = JSON.parse(localStorage.getItem("todoList"));

    if (!restoredList) {
      // make this a 2d array list of todo lists
      restoredList = [
        { content: "", isCompleted: false, id: uuidv4(), isFocused: false }
      ];
    }
    return restoredList;
  });

  /*
  setTodos((prevState) => newState);

  const setTodosAt0 = (todos) => setTodos(setState with prior state  (prevState) => [todos, prevState[1]]);


  */

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      // todos[0]
      <List />
      // todos[1]
      <AboutMe />
    </div>
  );
}

export default App;
