import React, { HTMLProps } from 'react';

const TodoInput = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input {...props} className="new-todo" placeholder="What needs to be done?" />
  );
};

export default TodoInput;