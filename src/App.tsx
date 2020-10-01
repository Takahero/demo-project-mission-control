import React from 'react';
import Main from "./pages/Main";
import './App.css';

const App: React.FC = () => {
  return (
    <div 
      className="App"
      data-testid="app"
    >
      <Main />
    </div>
  );
}

export default App;

