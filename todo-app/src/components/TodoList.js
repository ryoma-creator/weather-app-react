import React from "react";
import TodoItem from './TodoItem';
import { Draggable} from 'react-beautiful-dnd';


function TodoList({ tasks, onDeleteTask, onEditTask, onToggleCompletion }) {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <p>Please add new task.</p>
            ) : (
                tasks.map((task, index) => (
                    <Draggable key={task.id}　draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                            <div 
                                ref={provided.innerRef} 
                                {...provided.draggableProps} 
                                {...provided.dragHandleProps}
                            >
                            {/* ドラッグ可能なアイテム */}
                                <TodoItem
            // TodoList.jsでは、TodoItemにkeyを渡す必要はありません。Draggableにすでにkeyを設定しているからです。
                                    // key={task.id}
                                    task={task}
                                    onDelete={onDeleteTask}
                                    onEdit={onEditTask}
                                    onToggleCompletion={onToggleCompletion}
                                />
                            </div>
                        )}
                    </Draggable>
                ))
            )}
        </div>
    );
}






export default TodoList;
