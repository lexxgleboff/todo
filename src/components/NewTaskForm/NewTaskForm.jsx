import { Component } from 'react'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    value: '',
    min: '',
    sec: '',
  }

  onChangeHandler = (e) => {
    if (e.target.value.charAt(0) === ' ') {
      this.setState({
        value: '',
      })
    } else {
      this.setState({
        value: e.target.value,
      })
    }
  }

  onChangeMin = (e) => {
    this.setState({
      min: e.target.value,
    })
  }

  onChangeSec = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { addTask } = this.props
    const { value, min, sec } = this.state
    e.preventDefault()
    addTask(value, min, sec)
    this.setState({
      value: '',
      min: '',
      sec: '',
    })
  }

  render() {
    const { value, min, sec } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onChangeHandler}
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
            onChange={this.onChangeMin}
          />
          <input
            name="sec"
            type="number"
            min="0"
            max="59"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={sec}
            onChange={this.onChangeSec}
          />
          <input className="new-todo-form__submit" type="submit" />
        </form>
      </header>
    )
  }
}
