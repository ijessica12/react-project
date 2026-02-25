import { useState, useRef } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import TaskList from './TaskList';

const initialTasks = [
    { id: 1, text: "IAmHere", done: false },
    { id: 2, text: "reactjsexample.com", done: false },
    { id: 3, text: "A To do app developed using to consolidate your knowledge about React", done: false },
];

export default function TodoApp() {
    const [tasks, setTasks] = useState(initialTasks);
    const nextId = useRef(4);

    const addTask = (text) => {
        if (!text.trim()) return;
        setTasks([...tasks, { id: nextId.current++, text: text.trim(), done: false }]);
    };

    const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    return (
        <div className="todo-wrapper">
            <Header />
            <AddForm onAdd={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
    );
}