import TaskRow from "./TaskRow";

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return <p className="task-empty">No todos yet. Add one above!</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskRow key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    );
}