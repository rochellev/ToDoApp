import React, {useState} from 'react';
import './App.css';

function List(){
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
  ]);

  const [todoCount, setTodoCount] = useState(3);

  function handleKeyDown(e, i){
    if(e.key === 'Enter'){
      createTodoAtIndex(e, i);
    }
    if(e.key === 'Backspace' && todos[i].content === ''){
      e.preventDefault();
      return removeTodoAtIndex(i);
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

  function removeTodoAtIndex(i){
    if( i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i+1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i-1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(i){
    const tempTodos = [...todos];
    tempTodos[i].isCompleted = !tempTodos[i].isCompleted;
    setTodos(tempTodos);
  }

  return(
    <form className="todo-list">
    <ul>
      {todos.map((todoItem, i) => (
        <div className={`todo ${todoItem.isCompleted && 'todo-is-completed'}`}>
          <div className={'checkbox'} onClick={ () => toggleTodoCompleteAtIndex(i)}> 
            {todoItem.isCompleted && (<span>&#x2714;</span>)}
          </div>
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
  );


}

export default List;