import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
