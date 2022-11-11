import React from "react"
import TaskList from "../TaskList"
import Footer from "../Footer"


const NewTaskForm = ({data, onDeleted}) => {
    return (
        <section className="main">
            <TaskList
                todos={data} 
                onDeleted={(id) => onDeleted(id)}
            />
            <Footer />
        </section>

    )
}

          
export default NewTaskForm