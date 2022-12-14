/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Component } from 'react'

export default class Timer extends Component {
  state = {
    min: this.props.min,
    sec: this.props.sec,
    zero: false,
    active: false,
  }

  update = () => {
    const { zero, min, sec } = this.state

    if (zero) {
      this.setState({ min, sec: sec + 1 })
      sec === 59 && this.setState({ min: min + 1, sec: 0 })
    } else {
      this.setState({ min, sec: sec - 1 })
      sec === 0 && this.setState({ min: min - 1, sec: 59 })
      if (min === 0 && sec === 0) {
        this.setState({ min: 0, sec: 0 })
        clearInterval(this.interval)
      }
    }
  }

  startTimer = () => {
    this.setState({ active: true })
    this.interval = setInterval(() => this.update(), 1000)
  }

  stopTimer = () => {
    this.setState({ active: false })
    clearInterval(this.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidMount() {
    const { min, sec } = this.state
    if (min === 0 && sec === 0) {
      this.setState({ zero: true })
    }
  }

  render() {
    const { active } = this.state

    return (
      <span className="description">
        <button type="button" className="icon icon-play" onClick={this.startTimer} disabled={active} />
        <button type="button" className="icon icon-pause" onClick={this.stopTimer} />
        <span className="timer">
          {this.state.min} min {this.state.sec} sec
        </span>
      </span>
    )
  }
}
