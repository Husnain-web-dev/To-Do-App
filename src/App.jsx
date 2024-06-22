import logo from './logo.svg';
import './App.css';
// import'./script.js';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }
  return (
    <div className='container'>
      <div className="todo-app">
        <h2>To-Do List <img src="/public/images/icon.png"/></h2>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Add Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="list-container">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
