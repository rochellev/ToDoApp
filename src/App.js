import React, {useState, useEffect} from "react";
import logo from "./icons/logo.svg";
import "./App.css";
import List from "./components/List";
import AboutMe from "./components/AboutMe";

function App() {
  // 2D array
  const [todoCards, setTodoCards] = useState( () => {
    
  });

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <List />
      <AboutMe />
    </div>
  );
}

export default App;
