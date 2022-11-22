import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'


import './Task.css'

export default class Task extends Component {

    static defaultProps = {
        onDeleted: () => { },
        onCompleted: () => { },
        onEdit: () => { },
        created: () => { },
    }
    static propTypes = {
        label: PropTypes.string,
        completed: PropTypes.bool,
        onDeleted: PropTypes.func,
        onCompleted: PropTypes.func,
        onEdit: PropTypes.func,
        updateTask: PropTypes.func,
        created: PropTypes.instanceOf(Date),
        edit: PropTypes.bool,
    }

    state = {
        value: ''
    }

    onChangeValue = (e) => {
        this.setState({ value: e.target.value })  
    }

    onSubmitEdit = (e) => {
        e.preventDefault()
        this.props.updateTask(this.state.value, this.props.id)
        this.setState({
            value: ''
        })
    }

    render() {
        const { label, completed, onDeleted, onCompleted, created, onEdit, edit } = this.props
        let classEdit = edit ? 'editing' : completed ? 'completed' : ''
        let editInput = <form onSubmit={this.onSubmitEdit}>
                            <input 
                                type='text'
                                className='edit'
                                defaultValue={label}
                                onKeyDown={this.onChangeValue} 
                                autoFocus
                            />
                        </form>
        return (
            <li className={classEdit}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox" 
                        checked={completed}
                        onChange={onCompleted}
                    />
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">created {formatDistanceToNow(created, {includeSeconds: true})} ago</span>
                    </label>
                    <button
                        className="icon icon-edit"
                        onClick={onEdit}
                    ></button>
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    ></button>
                </div>
                {edit && editInput}
            </li>
        )
    }
}


