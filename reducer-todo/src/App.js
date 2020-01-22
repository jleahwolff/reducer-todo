import React from 'react';
import logo from './logo.svg';
import './App.css';

// reducers
import ListReducer from '../src/reducers/ListReducer';
import ToDoList from '../src/components/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
