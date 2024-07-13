import React from "react";
import TodoItem from './TodoItem';

function TodoList( tasks, onDeleteTask, onEditTask, onToggleCompletion ) {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <p>Please add new task.</p>
            ) : (
                tasks.map(task =>(
                    <TodoItem
                        key={task.id}
                        task={task}
                        onDelete={onDeleteTask}
                        onEdit={onEditTask}
                        onToggleCompletion={onToggleCompletion}
                    />
                ))
            )
            }
        </div>
    );
}

export default TodoList;
