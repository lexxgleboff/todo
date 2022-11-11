import React, {Component} from "react";

import Task from '../Task'

import './TaskList.css'

export default class TaskList extends Component {

    render() {

        const { todos, onDeleted } = this.props

        const elements = todos.map((item) => {
            const {id, ...itemProps} = item
                return (       
                    <Task
                        key={id}
                        {...itemProps} 
                        onDeleted={() => onDeleted(id)}
                    />
                )
            })
        return (
            <ul className="todo-list">
                {elements}
            </ul>
        )
    }
}

// const TaskList = ({ todos }) => {
//     const elements = todos.map((item) => {
//         const {id, ...itemProps} = item
//         return (       
//             <Task key={id} {...itemProps} />
//         )
//     })
//     return (
//         <ul className="todo-list">
//             {elements}
//         </ul>
//     )
// }
