/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'

export default class Task extends Component {
  state = {
    value: '',
  }

  onChangeValue = (e) => {
    this.setState({ value: e.target.value })
  }

  onSubmitEdit = (e) => {
    const { id, updateTask } = this.props
    const { value } = this.state
    e.preventDefault()
    updateTask(value, id)
    this.setState({
      value: '',
    })
  }

  render() {
    const { label, completed, onDeleted, onCompleted, created, onEdit, edit } = this.props
    // eslint-disable-next-line no-nested-ternary
    const classEdit = edit ? 'editing' : completed ? 'completed' : ''
    const editInput = (
      <form onSubmit={this.onSubmitEdit}>
        <input type="text" className="edit" defaultValue={label} onKeyDown={this.onChangeValue} autoFocus />
      </form>
    )
    return (
      <li className={classEdit}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={onCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNow(created, { includeSeconds: true })} ago</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={onEdit} />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        {edit && editInput}
      </li>
    )
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onCompleted: () => {},
  onEdit: () => {},
  created: () => {},
}
Task.propTypes = {
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEdit: PropTypes.func,
  created: PropTypes.instanceOf(Date),
}
