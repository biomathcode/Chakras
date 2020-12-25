import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
