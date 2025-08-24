import './App.css';
import SignUp from './components/auth/signUp'; 
import Login from './components/auth/login';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import GossipPage from './pages/gossipPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        pauseOnHover 
        theme="colored" 
      />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gossip" element={<GossipPage />} />
      </Routes>
    </>
  );
}
