import React, { ChangeEvent } from "react";
import { Todo } from '../interfaces/Todo';
import classNames from "classnames";

interface Props {
  todo: Todo;
  handleToggle: (todoItem: Todo) => void;
  handleDestroy: (todoItem: Todo) => void;
}

const TodoListItem = ( {todo, ...props}: Props ) => {
  const toggle = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleToggle(todo);
  }

  const destroy = () => {
    props.handleDestroy(todo);
  }
  return (
    <li
      className={classNames({
        todo: true,
        completed: todo.completed
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={toggle}
        />
        <label>{todo.content}</label>
        <button className="destroy" onClick={destroy}></button>
      </div>
    </li>
  );
};

export default TodoListItem;