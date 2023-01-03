import React from 'react';
import './App.css';
import Todolist, {taskType} from "./Todolist";

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to byu";
    const tasks_1: Array<taskType> = [
        {id:0, title: "HTML", isDone: true},
        {id:1, title: "JS", isDone: false},
        {id:3, title: "React", isDone: false},
        {id:4, title: "Redux", isDone: false},
        {id:5, title: "Git", isDone: false}
    ]
    const tasks_2: Array<taskType> = [
        {id:0, title: "Webstorm", isDone: true},
        {id:0, title: "Macbook", isDone: true},
        {id:0, title: "something else", isDone: true},
        {id:0, title: "webcam", isDone: true},
        {id:0, title: "book", isDone: true},
    ]
    return (
        <div className="App">
            <Todolist title={todoListTitle_1} tasks={tasks_1}/>
            <Todolist title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
