import React from 'react';
import {Route,Routes} from "react-router-dom";

import SignUp from './pages/SignUp';
import Login from "./pages/Login"
import Home from "./pages/Home"

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
