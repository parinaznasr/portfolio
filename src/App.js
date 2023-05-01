import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.js';
import CV from './Pages/CV/CV.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cv" element={<CV/>} />
        <Route path="/projects" element={<CV/>} />
      </Routes>
    </div>
  );
}

export default App;
