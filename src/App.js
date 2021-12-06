import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <h1>Toms Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
