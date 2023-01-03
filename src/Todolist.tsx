import React from 'react';

type TodolistType = {
    title: string
    tasks: Array<taskType>

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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;