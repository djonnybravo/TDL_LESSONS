import React, {useEffect, useState} from 'react';
import './App.css';
import Todolist, {taskType} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoListTitle_1: string = "What to learn"


    const [task, setTasks] = useState<Array<taskType>>([
        {id: 0, title: "HTML", isDone: true},
        {id: 1, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},

    ])

    const removeTask = (taskId: number) => {
        setTasks(task.filter(task => task.id !== taskId))

    }
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const changeFilter = (filter:FilterValuesType) => {
        setFilter(filter)
    }

    useEffect( () => {
        console.log(task)
    }, [task,])

    const getFilterTasksForRender = (tasks: Array<taskType>, filter: FilterValuesType): Array<taskType> => {

         switch (filter) {
            case "active":
                return tasks.filter(task => task.isDone === false)
            case "completed":
                return tasks.filter(task => task.isDone === true)
            default:
                return tasks
        }


    }
    const filteredTasksForRender = getFilterTasksForRender(task, filter)


    return (
        <div className="App">
            <Todolist
                title={todoListTitle_1}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
