import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const TodoListItem = ({ label, important = false }) => {

	const liStyle = {
		color: important ? "tomato" : "black"
	};

	return (
		<li>
			<span style={liStyle}>{label}</span>
		</li>
	)
};

export default TodoListItem;