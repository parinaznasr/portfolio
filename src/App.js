import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import FirstComponent from './components/FirstComponent/index.js';
import ContactComponent from './components/ContactComponent/index.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstComponent/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
