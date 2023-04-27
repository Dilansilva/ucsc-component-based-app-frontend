import React from 'react';

import {Route,Routes} from "react-router-dom";
import Login from "./pages/Login"

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route/>
    </Routes>
  );
}

export default App;
