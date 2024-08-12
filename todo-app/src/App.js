import React, { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import './App.css';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import AddButton from './components/AddButton';
import CustomDropdown from './components/CustomDropdown';
import FilterTabs from './components/FilterTabs';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTask, setNewTask] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [newCategory, setNewCategory] = useState('All');
  const [newPriority, setNewPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, {
        id: Date.now(),
        name: newTask,
        completed: false,
        category: newCategory,
        priority: newPriority,
      }]);
      setNewTask('');
      setNewCategory('All');
      setNewPriority('All');
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
    const taskToToggle = tasks.find(task => task.id === taskId);
    if (!taskToToggle) {
      console.error('Task not found');
      return;
    }

    if (taskToToggle.completed) {
      setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
      setTasks([...tasks, { ...taskToToggle, completed: false }]);
    } else {
      setTasks(tasks.filter(task => task.id !== taskId));
      setCompletedTasks([...completedTasks, { ...taskToToggle, completed: true }]);
    }
  };

  const filteredTasks = tasks.filter(task => 
    (filterCategory === 'All' || task.category === filterCategory) &&
    (filterPriority === 'All' || task.priority === filterPriority)
  );

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  const handleFocus = () => setIsExpanded(true);
  const handleClick = () => setIsExpanded(false);

  const deleteAllCompleted = () => {
    setTasks([]);
  };

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
  };

  const handlePriorityChange = (priority) => {
    setFilterPriority(priority);
  };

  return (
    <div className="todo-app">
      <div className="header">
        <h1 className="card"><i className="fas fa-list-alt"></i> Todo List</h1>
      </div>

      <div>
        <FilterTabs 
          onCategoryChange={handleCategoryChange}
          onPriorityChange={handlePriorityChange}
          categoryFilter={filterCategory}
          priorityFilter={filterPriority}
        />
      </div>

      <div className="menu card">
        <form onSubmit={addTask}>
          <div className={`input-container ${isExpanded ? 'expanded' : ''}`}>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
              onFocus={() => setIsExpanded(true)}
              required
            />
            {isExpanded && (
              <div className="expanded-options mt-4 flex items-center space-x-4">
                <CustomDropdown type="category" onSelect={setNewCategory} />
                <CustomDropdown type="priority" onSelect={setNewPriority} />
                <AddButton type="submit" />
              </div>
            )}
          </div>
        </form>
      </div>

      <button className="delete-all" onClick={deleteAllCompleted}>Delete All</button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <TodoList
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
