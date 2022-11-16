import React, { Component } from "react";
import TaskList from "../TaskList";
import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";

import './App.css'

export default class App extends Component {

  maxId = 0

  state = {
    data: [
      this.createDataItem('Completed task'),
      this.createDataItem('Editing task'),
      this.createDataItem('Active task')
    ],
    filter: 'all'
  }

  createDataItem(label) {
    return {
      label,
      completed: false,
      id: this.maxId++
    }
  }

  deleteTask = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id)

      const newArray = [...data.slice(0, index), ...data.slice(index + 1)]
      
      return {
        data: newArray
      }
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((el) => !el.completed)
      case 'completed':
        return items.filter((el) => el.completed)
      default:
        return items
    }
    // if(filter === 'all') return items
    // if(filter === 'active') return items.filter((el) => !el.completed)
    // if(filter === 'completed') return items.filter((el) => el.completed)
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  deletedCompletedTask = () => {
    this.setState(({data}) => {
      const newArray = data.filter((el) => !el.completed)
      return {
        data: newArray
      }
    })
  }

  addTask = (text) => {
    const newTask = this.createDataItem(text)

    this.setState(({data}) => {

      const newArray = [...data, newTask]
      
      return {
        data: newArray
      }
    })
  }

  onCompleted = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id)
      const completedTask = data[index]
      const newItem = { ...completedTask, completed: !completedTask.completed }   
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArray
      }
    })
  }

  render() {
   
    const {data, filter} = this.state

    const completedCount = data.length - data.filter((el) => el.completed).length
    const visibleItems = this.filter(data, filter)
    return (
      <section className="todoapp">
        <NewTaskForm addTask={ this.addTask } />
        <section className="main">
            <TaskList
              todos={visibleItems} 
              onDeleted={this.deleteTask}
              onCompleted={this.onCompleted}
            />
          <Footer
            filter={filter}
            onFilterChange={this.onFilterChange}
            itemsLeft={completedCount} 
            deletedCompletedTask ={this.deletedCompletedTask}
          />
        </section>
      </section>
    )
  }
}
