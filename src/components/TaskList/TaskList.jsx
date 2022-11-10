import React from "react";

import Task from '../Task'

import './TaskList.css'

const TaskList = ({ todos }) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id}>
                <Task {...itemProps} />
            </li>
        )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList