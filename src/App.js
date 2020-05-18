import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // when update todos, you need to get copy, modify, then return in setTodos
  const [todos, setTodos] = useState([
    {content: 'put away laundry',
    isCompleted: true,
    id: 1,
    },
    {
      content: 'vacuum rug',
      isCompleted: false,
      id: 2,
    },
    {
      content: 'do dishes',
      isCompleted: 'false',
      id: 3,
    }
  ])

  const [todoCount, setTodoCount] = useState(3);

  function handleKeyDown(e, i){
    if(e.key === 'Enter'){
      createTodoAtIndex(e, i);
    }
  }
  // add empty todo item to todos
  function createTodoAtIndex(e,i){
    // copy because state not be directly mutated
    var newTodoCount = todoCount;
    newTodoCount+=1;

    const newTodos = [...todos];
    newTodos.splice(i+1, 0, {
      content: '',
      isCompleted: false,
      id: newTodoCount,
    });

    setTodoCount(newTodoCount);
    setTodos(newTodos);
    // wait for state to finish update before focusing on new rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
      }, 0);
  }

  // update todo list state
  function updateTodoAtIndex (e, i){
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    console.log("updated item id: " + newTodos[i].id);
    setTodos(newTodos);

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
                key={todoItem.id} 
                type="text" 
                value={todoItem.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
             </div>
          ))}
       
        </ul>
      </form>
    </div>
  );
}

export default App;
