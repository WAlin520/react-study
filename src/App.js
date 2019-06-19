import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  let header={
    gender: 'man',
    age: 15
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header name={header}></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>点击我aaa</button>
      </header>
    </div>
  );
}

export default App;
