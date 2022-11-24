import { Component } from 'react'

import TaskList from '../TaskList'
import Footer from '../Footer'
import NewTaskForm from '../NewTaskForm'

import './App.css'

export default class App extends Component {
  maxId = 0

  state = {
    data: [
      this.createDataItem('Completed task'),
      this.createDataItem('Editing task'),
      this.createDataItem('Active task'),
    ],
    filter: 'all',
  }

  // eslint-disable-next-line class-methods-use-this
  onfilter(items, filter) {
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
  }

  deleteTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id)
      const newArray = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArray,
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  deletedCompletedTask = () => {
    this.setState(({ data }) => {
      const newArray = data.filter((el) => !el.completed)
      return {
        data: newArray,
      }
    })
  }

  addTask = (text) => {
    console.log(text)
    if (text) {
      const newTask = this.createDataItem(text)
      this.setState(({ data }) => {
        const newArray = [...data, newTask]
        return {
          data: newArray,
        }
      })
    }
  }

  onEditChange = (edit) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.label === edit)
      const editTask = data[index]
      const newItem = { ...editTask, edit: true }
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArray,
      }
    })
  }

  updateTask = (labelUpdate, id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id)
      const editTask = data[index]
      const newItem = { ...editTask, label: labelUpdate, edit: false }
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArray,
      }
    })
  }

  onCompleted = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id)
      const completedTask = data[index]
      const newItem = {
        ...completedTask,
        completed: !completedTask.completed,
      }
      const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArray,
      }
    })
  }

  createDataItem(label) {
    return {
      label,
      completed: false,
      // eslint-disable-next-line no-plusplus
      id: this.maxId++,
      created: new Date(),
      edit: false,
    }
  }

  render() {
    const { data, filter, edit } = this.state

    const completedCount = data.length - data.filter((el) => el.completed).length
    const visibleItems = this.onfilter(data, filter)
    return (
      <section className="todoapp">
        <NewTaskForm addTask={this.addTask} />
        <section className="main">
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteTask}
            onCompleted={this.onCompleted}
            onEdit={this.onEditChange}
            edit={edit}
            updateTask={this.updateTask}
          />
          <Footer
            filter={filter}
            onFilterChange={this.onFilterChange}
            itemsLeft={completedCount}
            deletedCompletedTask={this.deletedCompletedTask}
          />
        </section>
      </section>
    )
  }
}
