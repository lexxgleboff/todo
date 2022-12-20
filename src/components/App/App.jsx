import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TaskList from '../TaskList'
import Footer from '../Footer'
import NewTaskForm from '../NewTaskForm'

import './App.css'

export default function App() {
  function createDataItem(label, min = 0, sec = 0) {
    return {
      label,
      completed: false,
      id: uuidv4(),
      created: new Date(),
      edit: false,
      min,
      sec,
    }
  }

  const [data, setData] = useState([
    createDataItem('have a lunch', 0, 0),
    createDataItem('take medicine', 0, 0),
    createDataItem('write a post', 0, 0),
  ])
  const [filter, setFilter] = useState('all')

  function onfilter(items, filterItem) {
    switch (filterItem) {
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

  const deleteTask = (id) => {
    setData((arr) => arr.filter((el) => el.id !== id))
  }

  const onFilterChange = (filterItem) => {
    setFilter(filterItem)
  }

  const deletedCompletedTask = () => {
    setData((arr) => arr.filter((el) => !el.completed))
  }

  const addTask = (text, min, sec) => {
    if (text) {
      const newTask = createDataItem(text, Number(min), Number(sec))
      setData((arr) => [...arr, newTask])
    }
  }

  const onEditChange = (id) => {
    setData((arr) => {
      return arr.map((item) => {
        return item.id === id ? { ...item, edit: true } : item
      })
    })
  }

  const updateTask = (labelUpdate, id) => {
    setData((arr) => {
      return arr.map((item) => {
        return item.id === id ? { ...item, label: labelUpdate, edit: false } : item
      })
    })
  }

  const onCompleted = (id) => {
    setData((arr) => {
      return arr.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      })
    })
  }

  const completedCount = data.length - data.filter((el) => el.completed).length
  const visibleItems = onfilter(data, filter)
  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          todos={visibleItems}
          onDeleted={deleteTask}
          onCompleted={onCompleted}
          onEdit={onEditChange}
          updateTask={updateTask}
        />
        <Footer
          filter={filter}
          onFilterChange={onFilterChange}
          itemsLeft={completedCount}
          deletedCompletedTask={deletedCompletedTask}
        />
      </section>
    </section>
  )
}
