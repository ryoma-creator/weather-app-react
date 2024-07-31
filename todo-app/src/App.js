// useEffect
import React, { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import './App.css';
// drag & drop
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';



function App(){
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  // この書き方は、「初期値を決めるための関数」
  // アプリ起動時のデータ読み込みのタイミングが遅れる可能性があります。
  // useState内の関数を使用すると、初期値の設定と同時にデータを読み込めます。
  // Listがある時点で、Data管理とわかる
  // local storage保存を予定している場合、最初からこれだけ書いておけばOK.

  const [newTask, setNewTask] = useState('');
  
  const [newCategory, setNewCategory] = useState('uncategorized');
  
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [newPriority, setNewPriority] = useState('medium');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // const addTask = (taskName) => {
  //   setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  // };


// useEffect Practice
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  // const [effectLogs, setEffectLogs] = useState([]);
  // useEffect(() => {
  //   setEffectLogs(prev => [...prev, 'Effect 1: Runs after every render']);
  // });
  // useEffect(() => {
  //   setEffectLogs(prev => [...prev, 'Effect 2: Runs only on mount']);
  // }, []);
  // useEffect(() => {
  //   setEffectLogs(prev => [...prev, `Effect 3: Runs when count changes: ${count}`]);
  // }, [count]);
  // useEffect(() => {
  //   setEffectLogs(prev => [...prev, `Effect 4: Runs when name changes: ${name}`]);
  // }, [name]);


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);
  // 「stringify」という英単語には、「文字列に変換する」


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
  // const [reorderedItem] = newTask.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem); 

  setTasks(items);
  // setNewTask(newTask);
};



  return (
    <div>
      
      <h1><i class="fas fa-list-alt"></i> Todo List</h1>


      {/* // useEffect Practice */}
      {/* <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <div>
        <h3>Effect Logs:</h3>
        <ul>
          {effectLogs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div> */}


{/* Enter Form / Explore*/}
      <form onSubmit={addTask}>
        <div className="input-container">
          <input className="task-input hover"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="enter your new task"
          />
          <button className='add-button' type="submit" >
            <i className="fas fa-plus-circle add-icon"></i>
          </button>
        </div>
{/* const [newCategory, setNewCategory] = useState('uncategorized'); */}
        <select className="category-select hover"
          value={newCategory}
          onChange={(e)=> setNewCategory(e.target.value)}
        >
          <option value="uncategorized">Uncategorized</option>
          <option value="work">Work</option>         
          <option value="personal">Personal</option>
        </select>

        <select className="priority-select hover"
          value={newPriority}
          onChange={(e)=> setNewPriority(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>

        </select>


      </form>



      <select className="hover" filter-category
          value={categoryFilter}
          onChange={(e)=> setCategoryFilter(e.target.value)}
        >
          <option value='all'>All Category</option>
          <option value="uncategorized">Uncategorized</option>
          <option value="work">Work</option>         
          <option value="personal">Personal</option>
      </select>

      <select className="hover" filter-priority
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