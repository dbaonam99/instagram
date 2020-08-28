import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 

import Login from './pages/Login.js'

function App() {
  return (
    <Router>
      <div className="App">
        
          <Route path="/" exact component={Login}></Route>
      </div>
    </Router>
  );
}

export default App;
