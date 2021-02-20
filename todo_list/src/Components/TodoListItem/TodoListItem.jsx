import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import "./TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {

	const liStyle = {
		color: important ? "tomato" : "black"
	};

	return (
		<li className="list-group-item todo-app__list--item">
			<span style={liStyle}>{label}</span>
		</li>
	)
};

export default TodoListItem;