import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import AboutMe from './AboutMe';

function App() {
  // when update todos, you need to get copy, modify, then return in setTodos
  
  return(
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <List />
      <AboutMe />
    </div>
  );
}

export default App;
