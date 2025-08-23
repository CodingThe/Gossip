import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SignUp from './components/auth/signUp'; 
import Login from './components/auth/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/home'
import Gossip from './components/gossip/gossip';
import GossipPage from './pages/gossipPage';
export default function App() {
return(
  <>
      <Routes>
        <Route path= '/' element={<SignUp/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
        <Route path= '/home' element={<HomePage/>}></Route>
        <Route path= '/gossip' element = {<GossipPage/>}></Route>
      </Routes>
  </>
)
}