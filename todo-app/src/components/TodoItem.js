import React, { useState } from "react";

function TodoItem({ key, task, onDelete, onEdit,onToggleCompletion}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);

    const handleEdit = () => {
        onEdit(task.id, editedName);
        setIsEditing(false);
    };

    return(
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleCompletion(task.id)}
            />
            {isEditing ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        onBlur={handleEdit}
                        autoFocus
                    />
            ) : (
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                onDoubleClick={() => setIsEditing(true)}
            > 
                {task.name}
            </span>
            )}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;