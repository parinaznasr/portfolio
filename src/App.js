import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import FirstComponent from './components/FirstComponent/index.js';
import ContactComponent from './components/ContactComponent/index.js';
import Header from './components/CVComponent/header/index.js';
import CVComponent from './components/CVComponent/index.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstComponent/>} />
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/cv" element={<CVComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
