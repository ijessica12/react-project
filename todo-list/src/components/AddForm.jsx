import { useState } from "react";

export default function AddForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        onAdd(text);
        setText("");
    };

    return (
        <div className="add-form">
            <input
                className="add-input"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleAdd()}
                placeholder="Add todo..."
            />
            <button className="add-btn" onClick={handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
            </button>
        </div>
    );
}