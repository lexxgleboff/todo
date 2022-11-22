import React from "react";

import TaskFilter from "../TasksFilter";

import './Footer.css'

const Footer = ({ itemsLeft, deletedCompletedTask, filter, onFilterChange}) => {
    return (
        <footer className="footer">
          <span className="todo-count">{ itemsLeft } items left</span>
          <TaskFilter 
            filter={filter}   
            onFilterChange={onFilterChange}
          />
          <button
            className="clear-completed"
            onClick={deletedCompletedTask}
          >
            Clear completed
          </button>
        </footer>
    )
}

export default Footer