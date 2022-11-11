import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

import './App.css'

const Header = () => {
  return (
    <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    </header>
  )
}

export default class App extends Component {

  state = {
    data: [
        {label: 'Completed task', id: 1},
        {label: 'Editing task', id: 2},
        {label: 'Active task', id: 3},
    ]
  }

  deletTask = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id)

      const newArray = [...data.slice(0, index), ...data.slice(index + 1)]
      
      return {
        data: newArray
      }
    })

  }

  render() {
   
    return (
      <section className="todoapp">
        <Header />
        <NewTaskForm
          data={this.state.data} 
          onDeleted={this.deletTask}
          />
      </section>
    )
  }
}
