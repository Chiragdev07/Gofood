import React from 'react'
import { Home } from './Screen/Home';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import { Price } from './Screen/Price';
import { Login } from './Screen/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


export const App = () => {
  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/price" element={<Price/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>


      </Routes>
    </Router>
  )
}
export default App;