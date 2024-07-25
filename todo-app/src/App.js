import React, { useState } from "react";
import TodoList from './components/TodoList';
import './App.css';
// drag & drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App(){
  const [tasks, setTasks] = useState([]);
  // Listがある時点で、Data管理とわかる
  const [newTask, setNewTask] = useState('');
  
  const [newCategory, setNewCategory] = useState('uncategorized');
  
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [newPriority, setNewPriority] = useState('medium');
  const [priorityFilter, setPriorityFilter] = useState('all');

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

         category: newCategory,
         
         priority: newPriority

        }]);
        // reset⇩ after adding
        setNewTask('');

        setNewCategory('uncategorized')
        setNewPriority('medium')
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

  // const [newPriority, setNewPriority] = useState('medium');
  // const [priorityFilter, setPriorityFilter] = useState('all');
  // tasks = setTasks([...tasks, { id: Date.now(), name: taskName, completed: false ,  category: newCategory 

  const filteredTasks = tasks.filter(task =>
    (categoryFilter === 'all' || task.category === categoryFilter) &&
    (priorityFilter === 'all' || task.priority === priorityFilter)
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

// tasksのdataの中の、category: newCategory の部分だけtrueになるので、それに該当するものだけが残る仕組み

// {tasks.map(task => (
//   (selectedCategory === 'all' || task.category === selectedCategory) && (
//     <TodoItem key={task.id} task={task} />
//   )
// ))}
// mapでもfilterと同じものは作れる。⇧


// drag & drop
const onDragEnd = (result) => {
  if (!result.destination) return;

  const items = Array.from(tasks);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem); 

  setTasks(items);
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

{/* const [newCategory, setNewCategory] = useState('uncategorized'); */}
        <select
          value={newCategory}
          onChange={(e)=> setNewCategory(e.target.value)}
        >
          <option value="uncategorized">Uncategorized</option>
          <option value="work">Work</option>         
          <option value="personal">Personal</option>
        </select>

        <select
          value={newPriority}
          onChange={(e)=> setNewPriority(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>

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

      <select
        value={priorityFilter}
        onChange={(e)=> setPriorityFilter(e.target.value)}
      >
        <option value='all'>All</option>        
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>

      </select>

{/* drag & drop */}
{/* 基本的な使い方:
<DragDropContext />: ドラッグアンドドロップ機能を有効にしたい部分をラップ。
<Droppable />: ドロップ可能なエリア。
<Draggable />: ドラッグ可能なアイテム。 */}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>


              <TodoList 
                // tasks={tasks} filteredTasksに、dateが絞られて入っているので、代わりにこっちでOK
                tasks={filteredTasks}
                onDeleteTask={deleteTask}
                onEditTask={editTask}
                onToggleCompletion={toggleTaskCompletion}      
              />



              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>


    </div>
  );
}

  export default App;