import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const TodoListItem = ({label}) => {
	return (
		<li>{label}</li>
	)
};

export default TodoListItem;