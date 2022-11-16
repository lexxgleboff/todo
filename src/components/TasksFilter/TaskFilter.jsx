import React, { Component } from "react";

import './TaskFilter.css'

export default class TaskFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'}
  ]

  render() {
    const { filter, onFilterChange } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      const selected = isActive ? 'selected' : ''
      return (
        <li key={name}>
          <button
            className={selected}  
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        </li>
      )
    })
    return (
        <ul className="filters">
          {buttons}
        </ul>
    )
  }
}

// const TaskFilter = () => {
    // return (
    //     <ul className="filters">
    //         <li>
    //           <button className="selected">All</button>
    //         </li>
    //         <li>
    //           <button>Active</button>
    //         </li>
    //         <li>
    //           <button>Completed</button>
    //         </li>
    //       </ul>
    // )
// }
