import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './../TodoListItem/TodoListItem';

const TodoList = (props) => {
  const todoListItems = props.todoData.map((itemData) => {
    const {id, ...todoItemData} = itemData;

    return (
      <TodoListItem
        {...todoItemData}
        key={id}
      />
    );
  });

  return (
    <ul className="todo-app__list list-group">
      {todoListItems}
    </ul>
  )
}

export default TodoList;