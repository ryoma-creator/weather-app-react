import React, { useState } from "react";
import CheckedIcon from './animations/CheckedIcon';

function TodoItem({ task, onDelete, onEdit, onToggleCompletion }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [isHovered, setIsHovered] = useState(false);
    const [editingPriority, setEditingPriority] = useState(false);
    
  
    const handleEdit = () => {
      onEdit(task.id, editedName);
      setIsEditing(false);
    };
    
    const priorityIcons = {
      high: '🔥',
      medium: '🔶',
      low: '🔽'
    };
  
    const getPriorityIcon = (priority) => {
      switch(priority) {
        case 'high': return priorityIcons.high;
        case 'medium': return priorityIcons.medium;
        case 'low': return priorityIcons.low;
        default: return '?';
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    return (
      
      <div className={`todo-item hover ${task.completed ? 'completed' : ''}`}>
        {/* この部分で、タスクが完了状態（task.completed が true）の場合に completed クラスが追加 */}


            
                {/* CheckIconのところ */}
                  <div className="action-buttons">  
                <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onToggleCompletion(task.id)}
          >
            {task.completed ? (
              <div className="checked-icon">
                <CheckedIcon/>
              </div>
            ) : (
              <i className={`fas ${isHovered ? 'fa-check-circle' : 'fa-circle'}`}></i>
            )}
            {/* <i className={`fas ${task.completed ? 'fa-check-circle' : 'fa-check-circle'}`}></i> */}
          </button>
          </div>
        {/* CheckIconのところ末尾 */}

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



              {/* 入力したTask名 中央の位置*/}
              <div className="task-name">
                {task.name}
              </div>
              {/* 入力したTask名 末尾 */}

              <div className="task-meta">
              <i className={`fas ${task.category === 'work' ? 'fa-briefcase' : task.category === 'personal' ? 'fa-user' : ''}`}></i>
                {/* <i className={`fas ${task.category === 'work' ? 'fa-briefcase' : 'fa-user'}`}></i> */}
                {/* {task.category} */}
              </div>
            </>
          )}
        </div>


        <div className="action-buttons">        

        

        {/* Priority Icon */}
        <div className={`priority-indicator priority-${task.priority}`}>
          {getPriorityIcon(task.priority)}
        </div>
        {/* Priority Icon 末尾*/}


        {/* Edit Button */}
          <button onClick={() => setIsEditing(true)}>
            <i className="fas fa-edit"></i>
          </button>
              {/* Edit Button 末尾*/}

              {/*Delete　Button  */}
          <button onClick={() => onDelete(task.id)}>
            <i class="fas fa-window-close"></i>
            {/* <i className="fas fa-trash"></i> */}
          </button>
             {/*Delete　Button 末尾  */}
        </div>
      </div>
    );
  }

  export default TodoItem;