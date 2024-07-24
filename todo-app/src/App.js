import React, { useState } from "react";
import TodoList from './components/TodoList';
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const [newCategory, setNewCategory] = useState('uncategorized');

  // const addTask = (taskName) => {
  //   setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  // };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, {
         id: Date.now(), 
         name: newTask, 
         completed: false,

         category: newCategory 
        }]);
        setNewTask('');

        setNewCategory('uncategorized')
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, name: newName } : task
      ));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
  };


  return (
    <div>
      <h1>To Do List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="enter your new task"
        />

        <select
          value={newCategory}
          onChange={(e)=> setNewCategory(e.target.value)}
        >
          <option value="uncategorized">Uncategorized</option>
          <option value="work">Work</option>         
          <option value="personal">Personal</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <TodoList 
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onToggleCompletion={toggleTaskCompletion}      
      />
    </div>
  );
}

export default App;