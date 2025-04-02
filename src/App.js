import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel"; 
import ProfileView from "./pages/ProfileView";


const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/profile/:id" element={<ProfileView />} />
  </Routes>
);
}
export default App;


