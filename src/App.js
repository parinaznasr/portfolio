import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.js';
import CV from './Pages/CV/CV.js';
import Projects from './Pages/Projects/Project.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cv" element={<CV/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
