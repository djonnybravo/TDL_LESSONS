import React from 'react';
import {FilterValuesType} from "./App";

type TodolistType = {
    title: string
    tasks: Array<taskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter:FilterValuesType) => void
   }

export type taskType = {
    id: number
    title: string,
    isDone: boolean;

}
const Todolist = (props: TodolistType) => {
    let tasksList = props.tasks.length
        ? props.tasks.map((task:taskType) => {

            return (
                <li>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => props.removeTask(task.id)}>X</button>
                </li>
            )
        })
        : <span>Your taskslist is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button onClick={() => props.changeFilter("all")} >All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;