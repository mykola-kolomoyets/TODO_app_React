import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

const el = <h1>Hello world</h1>;

ReactDOM.render(
  <React.StrictMode>
    {el}
  </React.StrictMode>,
  root
);
