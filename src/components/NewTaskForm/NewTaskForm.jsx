import { useState } from 'react'

import './NewTaskForm.css'

export default function NewTaskForm({ addTask }) {
  const [value, setValue] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onChangeHandler = (e) => {
    if (e.target.value.charAt(0) === ' ') {
      setValue('')
    } else {
      setValue(e.target.value)
    }
  }

  const onChangeMin = (e) => {
    setMin(e.target.value)
  }

  const onChangeSec = (e) => {
    setSec(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addTask(value, min, sec)
    setValue('')
    setMin('')
    setSec('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => onChangeHandler(e)}
          value={value}
          name="name"
        />
        <input
          name="min"
          type="number"
          min="0"
          max="59"
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(e) => onChangeMin(e)}
        />
        <input
          name="sec"
          type="number"
          min="0"
          max="59"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(e) => onChangeSec(e)}
        />
        <input className="new-todo-form__submit" type="submit" />
      </form>
    </header>
  )
}
