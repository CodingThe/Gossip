import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SignUp from './components/auth/signUp'; 
import Login from './components/auth/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
return(
  <>
      <Routes>
        <Route path= '/' element={<SignUp/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
      </Routes>
  </>
)
}