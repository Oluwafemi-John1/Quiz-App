import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import User from './components/User';


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/*" element={<Error404/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
