import React from 'react';
import Main from './Components/Main';
import About from './Components/About';
import './Components/style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      < Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
