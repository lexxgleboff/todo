import PropTypes from 'prop-types'

import Task from '../Task'
import './TaskList.css'

export default function TaskList({ todos, onDeleted, onCompleted, onEdit, updateTask }) {
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
        onEdit={() => onEdit(id)}
        updateTask={updateTask}
      />
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onCompleted: () => {},
  onEdit: () => {},
  updateTask: () => {},
}
TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf),
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEdit: PropTypes.func,
  updateTask: PropTypes.func,
}
