import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

const el = (
  <div class="todo-app">
    <h1 className="todo-app__title">REACT TODO APP</h1>
    <input type="text"/>
    <ul className="todo-app__list">
      <li className="todo-app__list--item">Item1</li>
      <li className="todo-app__list--item">Item2</li>
      <li className="todo-app__list--item">Item3</li>
      <li className="todo-app__list--item">Item4</li>
      <li className="todo-app__list--item">Item5</li>
    </ul>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    {el}
  </React.StrictMode>,
  root
);
