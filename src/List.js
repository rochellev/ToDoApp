import React, {useState} from 'react';
import './App.css';
import ListItem from './ListItem';
import CheckBox from './ListItem';

function List(){
  const [todos, setTodos] = useState([
    {content: 'put away laundry',
    isCompleted: false,
    id: 1,
    },
    {
      content: 'vacuum rug',
      isCompleted: false,
      id: 2,
    },
    {
      content: 'do dishes',
      isCompleted: false,
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
    newTodos.forEach(item => {
      localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
    });
    // wait for state to finish update before focusing on new rendered input
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
      }, 0);
  }
 
  function updateTodoAtIndex (e, i){
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
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
        <div>
          <ListItem 
            key={todoItem.id}
            content={todoItem.content}
            isCompleted={todoItem.isCompleted}
            onKeyDown={e => handleKeyDown(e, i)}
            onChange={e => updateTodoAtIndex(e, i)}
            onClick={e => toggleTodoCompleteAtIndex(i)}  />
        </div>
        

      ))}
   
    </ul>
  </form>
  );
}

export default List;