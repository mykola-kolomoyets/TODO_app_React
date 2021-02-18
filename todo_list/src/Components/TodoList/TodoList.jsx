import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './../TodoListItem/TodoListItem';

const TodoList = () => {
  const items = [
    "Learn React",
    "Make TODO App",
    "Create more portfolio projects",
    "Pass the interview",
    "Get the job"
  ];

  const todoListItems = items.map(label => <TodoListItem className="todo-app__list--item" label={label}/>);

  return (
    <ul className="todo-app__list">
      {todoListItems}
    </ul>
  )
}

export default TodoList;