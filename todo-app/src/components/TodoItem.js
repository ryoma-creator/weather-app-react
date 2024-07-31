import React, { useState } from "react";
import CheckedIcon from './animations/CheckedIcon';

function TodoItem({ task, onDelete, onEdit, onToggleCompletion }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
  
    const handleEdit = () => {
      onEdit(task.id, editedName);
      setIsEditing(false);
    };
  
    const getPriorityIcon = (priority) => {
      switch(priority) {
        case 'high': return '!!!';
        case 'medium': return '!!';
        case 'low': return '!';
        default: return '?';
      }
    };
  
    return (
      <div className={`todo-item hover ${task.completed ? 'completed' : ''}`}>
        <div className={`priority-indicator priority-${task.priority}`}>
          {getPriorityIcon(task.priority)}
        </div>
        <div className="task-content">
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={handleEdit}
              autoFocus
            />
          ) : (
            <>
              <div className="task-name">{task.name}</div>
              <div className="task-meta">
                <i className={`fas ${task.category === 'work' ? 'fa-briefcase' : 'fa-user'}`}></i>
                {task.category}
              </div>
            </>
          )}
        </div>
        <div className="action-buttons">         
          <button onClick={() => onToggleCompletion(task.id)}>
            {task.completed ? (
              <div className="checked-icon">
                <CheckedIcon/>
              </div>
            ) : (
              <i className="fas fa-check-circle"></i>
            )}
            {/* <i className={`fas ${task.completed ? 'fa-check-circle' : 'fa-check-circle'}`}></i> */}
          </button>
          <button onClick={() => setIsEditing(true)}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={() => onDelete(task.id)}>
            <i class="fas fa-window-close"></i>
            {/* <i className="fas fa-trash"></i> */}
          </button>
        </div>
      </div>
    );
  }

  export default TodoItem;