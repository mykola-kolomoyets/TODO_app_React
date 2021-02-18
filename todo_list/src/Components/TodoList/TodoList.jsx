import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './../TodoListItem/TodoListItem';

const TodoList = () => {
  const items = [
    ["Learn React", true],
    ["Make TODO App", true],
    ["Create more portfolio projects", false],
    ["Pass the interview", true],
    ["Get the job", true],
    ["Drink Coffee", false]
  ];

  const todoListItems = items.map(item => <TodoListItem 
    className="todo-app__list--item" label={item[0]}
    important={item[1]}
  />);

  return (
    <ul className="todo-app__list">
      {todoListItems}
    </ul>
  )
}

export default TodoList;