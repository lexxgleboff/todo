/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react'
// import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'
import Timer from '../Timer/Timer'

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

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { label, completed, onDeleted, onCompleted, onEdit, edit, min, sec } = this.props
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
            <span className="title">{label}</span>
            <span className="description">
              {/* <button type="button" className="icon icon-play" />
              <button type="button" className="icon icon-pause" /> */}
              {/* <span className="time">min sec</span> */}
              <Timer min={min} sec={sec} />
            </span>
            {/* <span className="created">{formatDistanceToNow(created, { includeSeconds: true })}</span> */}
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
  // created: () => {},
}
Task.propTypes = {
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEdit: PropTypes.func,
  // created: PropTypes.instanceOf(Date),
}
