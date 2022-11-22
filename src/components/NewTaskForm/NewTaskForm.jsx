import React, { Component } from "react"

import './NewTaskForm.css'

export default class NewTaskForm extends Component {

    state = {
        value: ''
    }

    onChangeHandler = (e) => {
        if (e.target.value.charAt(0) === " ") {
            this.setState({
                value: ''
            })
        } else {
            this.setState({
                value: e.target.value
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus 
                        onChange={this.onChangeHandler}  
                        value={this.state.value}
                    />
                </form>
            </header>
        )
    }
}
