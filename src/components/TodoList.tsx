import React from "react";
import TodoListItem from './TodoListItem';
import { Todo } from '../interfaces/Todo';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

interface Props {
  todoList: Todo[];
  handleToggle: (todoItem: Todo) => void;
  handleDestroy: (todoItem: Todo) => void;
}

const TodoList = ({ todoList, handleToggle, handleDestroy }: Props) => {
  return (
    <ul className="todo-list">
      <ReactCSSTransitionGroup
        transitionName="todo-item"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {todoList.map(todo => {
          return (
            <TodoListItem
              todo={{
                id: todo.id,
                content: todo.content,
                completed: todo.completed
              }}
              handleToggle={handleToggle}
              handleDestroy={handleDestroy}
            />
          );
        })}
      </ReactCSSTransitionGroup>
    </ul>
  );
};

export default TodoList;