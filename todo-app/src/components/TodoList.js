import React from "react";
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';



function TodoList({ tasks, completedTasks, onDeleteTask, onEditTask, onToggleCompletion }) {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <div className="text-center">
                     <h1 className="text-4xl font-bold text-white-500">Let's get started on To-do list!</h1>
                </div>
            ) : (
                tasks.map((task, index) => (
                    <Draggable 
                    key={task.id}　
                    draggableId={task.id.toString()} 
                    // draggableId={`${task.id}`}
                    index={index}>
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
 <h2>Completed</h2>
      {completedTasks.map((task, index) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onEdit={onEditTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
            
        </div>
    );
}






export default TodoList;
