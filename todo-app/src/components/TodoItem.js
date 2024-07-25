import React, { useState } from "react";

//tasks{ id: Date.now(), name: taskName, completed: false }
//Data example

function TodoItem({ task, onDelete, onEdit, onToggleCompletion}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);

    const handleEdit = () => {
        onEdit(task.id, editedName);
        setIsEditing(false);
    };

// onEdit ⇩
// const editTask = (taskId, newName) => {
//     setTasks(tasks.map(task =>
//       task.id === taskId ? { ...task, name: newName } : task
//       ));
//   };

// {tasks.length === 0 ? (
//     <p>Please add new task.</p>
// ) : (
// 要素が０より大きければ、to do listがあるのが前提なので以下が表示される
// ToDoList.jsを参照

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'high': return 'red';
            case 'medium': return 'yellow';
            case 'low': return 'green';
            default: return 'gray';
        }
    };

    return(
        <div className="todo-item" style={{
            borderColor: getPriorityColor(task.priority),
            borderWidth: '2px',
            borderStyle: 'solid',
            padding: '10px',
            margin: '5px'
        }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleCompletion(task.id)}
// const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//       ));
//   };
// チェックをon/offにするだけのもの
            />

{/* const [isEditing, setIsEditing] = useState(false); */}
            {isEditing ? (
                    <input
                        type="text"
// const [editedName, setEditedName] = useState(task.name);
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        onBlur={handleEdit}
// const handleEdit = () => {
//     onEdit(task.id, editedName);
//     setIsEditing(false);
// }; 
// onEdit ⇩
// const editTask = (taskId, newName) => {
//     setTasks(tasks.map(task =>
//       task.id === taskId ? { ...task, name: newName } : task
//       ));
//   };   
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
            <span className="task-meta">
                Category: {task.category}, Priority: {task.priority}
            </span>

            <button onClick={() => onDelete(task.id)}>Delete</button>
            {/* const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }; */}
        </div>
    );
}

export default TodoItem;