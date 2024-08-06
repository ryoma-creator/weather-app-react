// useEffect
import React, { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import './App.css';
// drag & drop
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import { motion } from 'framer-motion';
import ChipTabs from './components/ChipTabs';
import './index.css'; 
import SpotlightButton from './components/SpotlightButton';
import SlideTabs from './components/SlideTabs';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShiftingDropDown from './components/ShiftingDropDown';


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
  
  const [showFilters, setShowFilters] = useState(false);

  const [newCategory, setNewCategory] = useState('uncategorized');
  
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [newPriority, setNewPriority] = useState('medium');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const [isExpanded, setIsExpanded] = useState(false);
  // 隠れメニュー


  const [completedTasks, setCompletedTasks] = useState([]);
  // completed , incompleted menu!
  
  const [newDeadline, setDeadline] = useState(null);







  
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
         
         priority: newPriority,
         deadline: newDeadline,

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

  // const toggleTaskCompletion = (taskId) => {
  //   setTasks(tasks.map(task =>
  //     task.id === taskId ? { ...task, completed: !task.completed } : task
  //     ));
  // };　version Up for complete and incomplete
//   const completeTask = (taskId) => {
//   const taskToComplete = tasks.find(task => task.id === taskId);
//   setCompletedTasks([...completedTasks, taskToComplete]);
//   setTasks(tasks.filter(task => task.id !== taskId));
// };
// このコードは、タスクが完了したときに以下の二つの配列を更新するためのもの
// completedTasks: 完了したタスクの配列。新たに完了したタスクを追加
// tasks: 未完了のタスクの配列。完了したタスクを取り除く
  const toggleTaskCompletion = (taskId) => {
    const taskToToggle = tasks.find(task => task.id === taskId);
    // 指定されたIDのタスクを見つける
    if (!taskToToggle) {
      console.error('Task not found');
      return;
    }

    if (taskToToggle.completed) {
      // タスクが既に完了しているかチェック
      setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
      // 完了済みリストからこのタスクを削除。
      // 取り除きたいId以外をListに残す。空のuseStateへ入れる。
      setTasks([...tasks, { ...taskToToggle, completed: false }]);
      // タスクを未完了状態に戻し、通常のタスクリストに追加。
    } else {
      // タスクを完了済みに移動
      // タスクがまだ完了していない場合の処理。
      setTasks(tasks.filter(task => task.id !== taskId));
      // 通常のタスクリストからこのタスクを削除します。
      setCompletedTasks([...completedTasks, { ...taskToToggle, completed: true }]);
      // タスクを完了状態にし、完了済みリストに追加します。
    }
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

const handleFocus = () => setIsExpanded(true);
const handleClick = () => setIsExpanded(false);


const deleteAllCompleted = () => {
  setTasks([]);
};
// 全削除

  return (
    
    <div className="todo-app">
      <div className="header">
      <h1 className="card"><i className="fas fa-list-alt"></i> Todo List</h1>
 

      
 {/*右上に持ってくるFilter　クリックすると開く仕組み  */}
 <div className="filters">
      <button className="filter" onClick={() => setShowFilters(!showFilters)}>
         <i class="fas fa-chevron-down"></i>
      </button>
      {showFilters && (
        <div className="filter-dropdown">
          <h3>Filter by</h3>
          <div className="filters-item">
          <div className="category-filters">
          {/* フィルターとソートのオプション */}
            <select 
              className="hover"
              value={categoryFilter}
              onChange={(e)=> setCategoryFilter(e.target.value)}
            >
              <option value='all'>All Category</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="work">Work</option>         
              <option value="personal">Personal</option>
            </select>
          </div>  

        <div className="priority-filters">
          <select className="hover" filter-priority
            value={priorityFilter}
            onChange={(e)=> setPriorityFilter(e.target.value)}
          >
            <option value='all'>All</option>        
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>

          </select>         
        </div>
        </div>
        </div>

      )} 
</div>

    </div>


{/* Enter Form / Explore*/}
<div className="menu card">
   <form onSubmit={addTask}>
  <div className={`input-container ${isExpanded ? 'expanded' : ''}`}>
    <input
      className="task-input hover"
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add new task"
      onFocus={handleFocus}
      // onBlur={handleBlur}
    />
  {/* Enter Form / Explore末尾*/}

  {/* 隠れメニュー */}
    {isExpanded && (
      <div className="expanded-options">
        {/* カテゴリーと優先度の選択肢 */}
        {/* <div className="App">
           <ChipTabs />
        </div> */}

        <div><ShiftingDropDown/></div>

        {/* <div><SlideTabs/></div> */}

{/*ギミック⇨ShitingDropDonwへ */}
        {/* <select className="category-select"
          value={newCategory}
          onChange={(e)=> setNewCategory(e.target.value)}
        >
          <option value="uncategorized">No Category</option>
          <option value="work">

            <i className='fas fa-briefcase'></i>
               Work
            </option>    

          <option value="personal">Personal</option>
        </select> */}

        {/* <select className="priority-select"
          value={newPriority}
          onChange={(e)=> setNewPriority(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>

        </select> */}


 
{/* Add button */}
        <button className='add-button' type="submit">
          <i className="fas fa-plus-circle add-icon"></i>
        </button>
      </div>
    )}
     {/* 隠れメニューメニュー末尾 */}
  </div>
</form>
</div>

<div className="App">
           <ChipTabs />
</div>

        <div><SpotlightButton/></div>

        <div><SlideTabs/></div>
<button className="delete-all" onClick={deleteAllCompleted}>Delete All</button>

<DatePicker
  selected={newTask.deadline}
  onChange={(date) => setNewTask({...newTask, deadline: date})}
  placeholderText="Set due date"
/>

{/* <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    </div> */}


    {/* <div className="bg-blue-500 text-white p-4 m-4 rounded">
  This is a test div with Tailwind classes
</div> */}

{/* <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="bg-green-500 text-white p-4 m-4 rounded"
>
  This is a test motion div
</motion.div>

<div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
    </div> */}

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
                completedTasks={completedTasks}     
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