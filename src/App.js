import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './test.jsx';

var person = {
  name: 'ddddd',
  age:125,
  gender: '男',
  skill: 'energin'
}

function App() {
  return (
    <div className="App">
    <Hello {...person}></Hello>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
