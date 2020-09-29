import React from 'react';
import logo from './logo.svg';
import Main from "./pages/Main";
import './App.css';

function App() {
  return (
    <div 
      className="App"
      data-testid="App"
    >
      <Main />
    </div>
  );
}

export default App;
