import React from 'react';
import { Todo } from '../interfaces/Todo';

interface Props {
  todo: Todo;
}

const TodoListItem = ( {todo}: Props ) => {
  return (
    <li className="todo">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todo.content}</label>
        <button className="destroy"></button>
      </div>
    </li>
  )
};

export default TodoListItem;