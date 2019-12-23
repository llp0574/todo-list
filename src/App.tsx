import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './interfaces/Todo';
import { Utils } from "./utils";

const App = () => {

  const [todoList, setTodoList] = useState<Array<Todo>> ([]);
  const [todoInput, setTodoInput] = useState('');

  const handleEnter = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      setTodoList(prevTodoList =>
        [
          ...prevTodoList,
          {
            id: Utils.uuid(),
            content: todoInput,
            completed: false
          }
        ]
      );

      setTodoInput("");
    }
  } 

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>TODOS</h1>
        <TodoInput onKeyDown={handleEnter} onChange={handleInputChange} value={todoInput}/>
      </header>
      <section className="main">
        <TodoList todoList={todoList}/>
      </section>
    </section>
  )
}

export default App;