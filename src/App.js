import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import User from './components/User';


function App() {
    const user = localStorage.login
    
  return (
    <>
    <Router>
        <Routes>
            <Route path='/dashboard' element={user? <Dashboard/> :<Navigate to='/signin' />}/>
            {/* <Route element={user? <User/> :<Navigate to='/signin' />} path="/user"  /> */}
            <Route path="/user" element={<User/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/*" element={<Error404/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
