import React, { Component } from "react";

import './Task.css'

export default class Task extends Component {
    constructor() {
        super()
        this.state = {
            completed: false
        }
    }

    setChecked = () => {
        this.setState((state) => {
            return {
                completed: !this.state.completed
            }
        })
    }

    render() {
        
        const {completed} = this.state
        let classLabel = completed ? 'completed' : ''

        const { id, label, onDeleted } = this.props
        return (
            <li key={id} className={classLabel}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox" 
                        checked={completed}
                        onChange={this.setChecked}
                    />
                    <label>
                        <span className="description">{ label }</span>
                    <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    ></button>
                </div>
            </li>
        )
    }
}

// const Task = ({id, label }) => {
//     return (
//         <li key={id}>
//             <div className="view">
//                 <input className="toggle" type="checkbox" />
//                 <label>
//                     <span className="description">{ label }</span>
//                 <span className="created">created 5 minutes ago</span>
//                 </label>
//                 <button className="icon icon-edit"></button>
//                 <button className="icon icon-destroy"></button>
//             </div>
//         </li>
//     )
// }

// export default Task
