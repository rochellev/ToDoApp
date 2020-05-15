import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {content: 'put away laundry',
    isCompleted: true,
    },
    {
      content: 'vacuum rug',
      isCompleted: false,
    },
    {
      content: 'do dishes',
      isCompleted: 'false',
    }
  ])

  return(
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todoItem, i) => (
               <div className="todo">
               <div className="checkbox" />
                 <input type="text" value={todoItem.content}/>
             </div>
          ))}
       
        </ul>
      </form>
    </div>
  );
}

export default App;
