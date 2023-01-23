import React, {useState,} from 'react';
import './App.css';
import Todolist, {taskType} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoListTitle_1: string = "What to learn"
    const [task, setTasks] = useState<Array<taskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: false},
    ])
    const removeTask = (taskId: string) => {
        setTasks(task.filter(task => task.id !== taskId))
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const newTask: taskType = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...task])
    }
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const getFilterTasksForRender = (tasks: Array<taskType>, filter: FilterValuesType): Array<taskType> => {

        switch (filter) {
            case "active":
                return tasks.filter(task => !task.isDone)
            case "completed":
                return tasks.filter(task => task.isDone)
            default:
                return tasks
        }


    }
    const filteredTasksForRender = getFilterTasksForRender(task, filter)
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(task.map(t => t.id === taskID ? {...t, isDone: isDone} : t))
    }

    return (
        <div className="App">
            <Todolist
                title={todoListTitle_1}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
