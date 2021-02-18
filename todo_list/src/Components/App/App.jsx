import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import TodoList from './../TodoList/TodoList';
import TodoSearch from './../TodoSearch/TodoSearch';
import TodoTitle from './../TodoTitle/TodoTitle';

const App = () => {
  // const items = [
  //   ["Learn React", true],
  //   ["Make TODO App", true],
  //   ["Create more portfolio projects", false],
  //   ["Pass the interview", true],
  //   ["Get the job", true],
  //   ["Drink Coffee", false]
  // ];

  const todoData = [
    {
      label: "Learn React",
      important: true
    },
    {
      label: "Make TODO App",
      important: true
    },
    {
      label: "Create more portfolio projects",
      important: false
    },
    {
      label: "Pass the interview",
      important: true
    },
    {
      label: "Get the job",
      important: true
    },
    {
      label: "Drink Coffee",
      important: false
    },
  ]
  return (
    <div className="todo-app">
      <TodoTitle />
      <TodoSearch />
      <TodoList todoData={todoData}/>
    </div>
  )
}

export default App;