import React, {Component} from "react";
import PropTypes from 'prop-types'

import Task from '../Task'

import './TaskList.css'

export default class TaskList extends Component {

    static defaultProps = {
        onDeleted: () => { },
        onCompleted: () => { },
        onEdit: () => { },
        updateTask: () => { },
    }
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDeleted: PropTypes.func,
        onCompleted: PropTypes.func,
        onEdit: PropTypes.func,
        updateTask: PropTypes.func,
    }

    render() {

        const { todos, onDeleted, onCompleted, onEdit, updateTask } = this.props

        const elements = todos.map((item) => {
            const { id, label, ...itemProps } = item
                return (       
                    <Task
                        key={id}
                        {...itemProps} 
                        id={id}
                        label={label}
                        onDeleted={() => onDeleted(id)}
                        onCompleted={() => onCompleted(id)}
                        onEdit={() => onEdit(label)}
                        updateTask={updateTask}
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

