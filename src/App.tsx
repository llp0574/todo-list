import React, { useReducer, KeyboardEvent, ChangeEvent } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './interfaces/Todo';
import { Utils } from "./utils";
require('./index.css');
const initialState = {
  todoInput: '',
  todoList: new Array<Todo>()
}

function reducer(state: any, action: any) {
  let _state = {...state};
  switch (action.type) {
    case 'ADD_TODO':
      _state.todoList = [
        ...state.todoList,
        {
          id: Utils.uuid(),
          content: state.todoInput,
          completed: false
        }
      ]
      return _state;
      break;
    case 'DESTROY_TODO':
      _state.todoList = state.todoList.filter((item:Todo) => {
        return item.id !== action.todoItem.id;
      })
      return _state;
      break;
    case 'INPUT_CHANGE':
      _state.todoInput = action.value;
      return _state;
      break;
    case 'TOGGLE_ITEM':
      _state.todoList = state.todoList.map((item: Todo) => {
        return item.id !== action.todoItem.id
          ? item
          : Object.assign({}, item, { completed: !item.completed });
      });
      return _state;
      break;
    default:
      return _state;
      break;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEnter = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      dispatch({
        type: 'ADD_TODO'
      });
      dispatch({
        type: 'INPUT_CHANGE',
        value: ''
      });
    }
  } 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: e.currentTarget.value
    });
  };

  const handleToggle = (todoItem: Todo) => {
    dispatch({
      type: "TOGGLE_ITEM",
      todoItem
    });
  };

  const handleDestroy = (todoItem: Todo) => {
    dispatch({
      type: "DESTROY_TODO",
      todoItem
    });
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>TODOS</h1>
        <TodoInput
          onKeyDown={handleEnter}
          onChange={handleInputChange}
          value={state.todoInput}
        />
      </header>
      <section className="main">
        <TodoList
          todoList={state.todoList}
          handleToggle={handleToggle}
          handleDestroy={handleDestroy}
        />
      </section>
    </section>
  );
}

export default App;