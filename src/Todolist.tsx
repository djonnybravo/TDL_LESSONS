import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

type TodolistType = {
    title: string
    tasks: Array<taskType>
    filter: FilterValuesType
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export type taskType = {
    id: string
    title: string,
    isDone: boolean;

}
const Todolist = (props: TodolistType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const addTask = () => {
       if (title.trim() !== "") {
           props.addTask(title)
           setTitle('')
       }else {
           setError(true)
       }
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const onPressEnterChange = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(title);
            setTitle('')
        }
    }
    //const onAllClickHandler = () => props.changeFilter("all")
    const onActiveClickHandler = () => props.changeFilter("active")
    const onCompletedClickHandler = () => props.changeFilter("completed")

    const handlerCreator = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }



    let tasksList = props.tasks.length
        ? props.tasks.map((task: taskType) => {
            const removeTask = () => props.removeTask(task.id)
            const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked)
            const taskClases = task.isDone ? "task-done" : "taskNOTdone"
            return (
                <li key={task.id} className={taskClases}>
                    <input type="checkbox" checked={task.isDone} onChange={changeTaskStatus}/>
                    <span>{task.title}</span>
                    <button onClick={removeTask}>X</button>

                </li>
            )
        })
        : <span>Your taskslist is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeSetTitle} onKeyPress={onPressEnterChange}  className={error? "input-error" : ""}/>
                <button onClick={addTask}>+</button>
                {error && <div>ОШИБКА</div>}
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button onClick={handlerCreator("all")} className={props.filter === "all" ? "activeBtnFilter" : ""}>All</button>
                <button onClick={handlerCreator("active")} className={props.filter === "active" ? "activeBtnFilter" : ""}>Active</button>
                <button onClick={handlerCreator("completed")} className={props.filter === "completed" ? "activeBtnFilter" : ""}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;