import React from 'react'
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import './App.css';
import { Route } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <div 
      className="App"
      data-testid="app"
    >
      <Route
          path="/project" 
          component={Dashboard}
      />
      <Route
          path="/signup" 
          component={Auth}
      />
      <Route
          path="/login" 
          component={Auth}
      />
    </div>
  )
}

export default App;

