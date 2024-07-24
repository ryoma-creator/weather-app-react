import React, { useState } from "react";
import TodoList from './components/TodoList';
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);
  // Listがある時点で、Data管理とわかる
  const [newTask, setNewTask] = useState('');
  
  const [newCategory, setNewCategory] = useState('uncategorized');
  
  const [categoryFilter, setCategoryFilter] = useState('all');

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

  // new filter function 
  // const [categoryFilter, setCategoryFilter] = useState('all');
  // tasks = setTasks([...tasks, { id: Date.now(), name: taskName, completed: false ,  category: newCategory 
  const filteredTasks = tasks.filter(task =>
    categoryFilter === 'all' || task.category === categoryFilter
  );
  // task.categoryは、all以外のもの。NewCategoryのvalueには、allないので。
  // value={newCategory}

  // categoryFilter === 'work' の場合：(example result)
// filteredTasks = [
//   { id: 2, name: "Finish report", category: "work", completed: false },
//   { id: 4, name: "Team meeting", category: "work", completed: false },
// ];
// 条件部分: categoryFilter === 'all' || task.category === categoryFilter

// この部分は「OR」条件です（|| は「または」を意味します）。
// 左側 categoryFilter === 'all': カテゴリフィルターが 'all' かどうか
// 右側 task.category === categoryFilter: タスクのカテゴリがフィルターと一致するかどうか
// この条件は各タスクに対して以下のように動作します：

// もし categoryFilter が 'all' なら、条件の左側が true になるので、全てのタスクが含まれます。
// そうでない場合、条件の右側 task.category === categoryFilter がチェックされます。

// タスクのカテゴリがフィルターと一致すれば true となり、そのタスクは含まれます。
// 一致しなければ false となり、そのタスクは除外されます。

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

      <select
          value={categoryFilter}
          onChange={(e)=> setCategoryFilter(e.target.value)}
        >
          <option value='all'>All Category</option>
          <option value="uncategorized">Uncategorized</option>
          <option value="work">Work</option>         
          <option value="personal">Personal</option>
        </select>


      <TodoList 
        // tasks={tasks} filteredTasksに、dateが絞られて入っているので、代わりにこっちでOK
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onToggleCompletion={toggleTaskCompletion}      
      />
    </div>
  );
}

  export default App;