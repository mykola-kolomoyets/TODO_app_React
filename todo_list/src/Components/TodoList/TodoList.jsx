import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './../TodoListItem/TodoListItem';

const TodoList = (props) => {
  const todoListItems = props.todoData.map((itemData) => {
    return (
      <TodoListItem
        className="todo-app__list--item" 
        {...itemData}
      />
    );
  });

  return (
    <ul className="todo-app__list">
      {todoListItems}
    </ul>
  )
}

export default TodoList;