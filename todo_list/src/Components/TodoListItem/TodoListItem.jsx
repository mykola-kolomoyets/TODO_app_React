import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const TodoListItem = (props) => {
	return (
		<li>{props.item}</li>
	)
};

export default TodoListItem;