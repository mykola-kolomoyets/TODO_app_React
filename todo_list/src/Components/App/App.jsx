import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import TodoList from './../TodoList/TodoList';
import TodoSearch from './../TodoSearch/TodoSearch';
import TodoTitle from './../TodoTitle/TodoTitle';

const App = () => {
  return (
    <div class="todo-app">
      <TodoTitle />
      <TodoSearch />
      <TodoList />
    </div>
  )
}

export default App;