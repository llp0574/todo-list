import React from 'react';
import TodoListItem from './TodoListItem';
import { Todo } from '../interfaces/Todo';

interface Props {
  todoList: Todo[];
}

const TodoList = ({todoList}: Props) => {
  return (
    <ul className="todo-list">
      {
        todoList.map(todo => {
          return <TodoListItem
            todo={{
              id: todo.id,
              content: todo.content,
              completed: todo.completed
            }}
          />
        })
      }
    </ul>
  );
};

export default TodoList;