import React from 'react';
import Main from "./pages/Main";
import './App.css';
import { useSelector } from 'react-redux'
import { RootState } from './store'

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)
  return (
    <div 
      className="App"
      data-testid="app"
    >
      <Main />
    </div>
  )
  
}

export default App;

