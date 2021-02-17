// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// ROOT ELEMENT
const root = document.getElementById('root');

// COMPONENTS
const TodoTitle = () => {
  return (
    <h1 className="todo-app__title">REACT TODO APP</h1>
  )
}

const TodoSearch = () => {
  return (
    <input type="text" />
  )
}

const TodoList = () => {
  return (
    <ul className="todo-app__list">
      <li className="todo-app__list--item">Item1</li>
      <li className="todo-app__list--item">Item2</li>
      <li className="todo-app__list--item">Item3</li>
      <li className="todo-app__list--item">Item4</li>
      <li className="todo-app__list--item">Item5</li>
    </ul>
  )
}

const App = () => {
  return (
    <div class="todo-app">
      <TodoTitle />
      <TodoSearch />
      <TodoList />
    </div>
  )
}


// RENDERING
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  root
);
