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

  function handleKeyDown(e, i){
    if(e.key === 'Enter'){
      createTodoAtIndex(e, i);
    }
  }
  // update todos state with new empty todo item
  function createTodoAtIndex(e,i){

    // copy because state not be directly mutated
    const newTodos = [...todos];
    newTodos.splice(i+1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    // wait for state to finish update before focusing on new rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);

  }

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
              <input 
                type="text" 
                value={todoItem.content}
                onKeyDown={e => handleKeyDown(e, i)}
              />
             </div>
          ))}
       
        </ul>
      </form>
    </div>
  );
}

export default App;
