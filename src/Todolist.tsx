import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";

type TodolistType = {
    title: string
    tasks: Array<taskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter:FilterValuesType) => void
    addTask: (title: string) => void
}

export type taskType = {
    id: string
    title: string,
    isDone: boolean;

}
const Todolist = (props: TodolistType) => {
    const [title, setTitle] = useState<string>('')
    const addTask = () => {props.addTask(title); setTitle('')}
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) =>  setTitle(e.currentTarget.value)
    const onPressEnterChange = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(title);
            setTitle('')
        }
    }
    const onAllClickHandler = () => props.changeFilter("all")
    const onActiveClickHandler = () => props.changeFilter("active")
    const onCompletedClickHandler = () => props.changeFilter("completed")

    const handlerCreator = (filter:FilterValuesType) => {
            return () => props.changeFilter(filter)
    }



    let tasksList = props.tasks.length
        ? props.tasks.map((task:taskType) => {

            return (
                <li key={task.id}>
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
                <input value={title} onChange={onChangeSetTitle} onKeyPress={onPressEnterChange}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button onClick={handlerCreator("all")} >All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;