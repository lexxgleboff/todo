import React from "react";
import Footer from "../Footer";
import TaskList from "../TaskList/TaskList";


import './App.css'



const Header = () => {
  return (
    <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    </header>
  )
}

const App = () => {

    const data = [
        {label: 'Completed task', id: 1},
        {label: 'Editing task', id: 2},
        {label: 'Active task', id: 3},
    ]

  return (
    <section className="todoapp">
          <Header />
          <section className="main">
              <TaskList todos={ data } />
              <Footer />
          </section>
      </section>
      
  )
}

export default App