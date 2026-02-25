export default function TaskRow({ task, onToggle, onDelete }) {
    return (
        <li className="task-row">
            <input
                type="checkbox"
                className="task-checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)}
            />
            <span className={`task-text ${task.done ? "task-text-done" : ""}`}>
                {task.text}
            </span>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#e53e3e">
                    <path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9zm0 5h2v9H9V8zm4 0h2v9h-2V8z" />
                </svg>
            </button>
        </li>
    );
}