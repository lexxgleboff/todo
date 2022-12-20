/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react'
// import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'
import Timer from '../Timer/Timer'

export default function Task({ id, label, completed, onDeleted, onCompleted, onEdit, edit, min, sec, updateTask }) {
  const [value, setValue] = useState('')

  function onSubmitEdit(e) {
    e.preventDefault()
    updateTask(value, id)
    setValue('')
  }

  // eslint-disable-next-line no-nested-ternary
  const classEdit = edit ? 'editing' : completed ? 'completed' : ''
  const editInput = (
    <form onSubmit={onSubmitEdit}>
      <input type="text" className="edit" defaultValue={label} onKeyDown={(e) => setValue(e.target.value)} autoFocus />
    </form>
  )
  return (
    <li className={classEdit}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onCompleted} />
        <label>
          <span className="title">{label}</span>
          <span className="description">
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
