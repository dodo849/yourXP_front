import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SellPostList from './pages/SellPostList';
import SellShowPost from './pages/SellShowPost';
import SellAllPost from './pages/SellAllPost';

function App() {
  return (
    <Routes>
      <Route path='/selllist' element={<SellPostList/>}></Route>
      <Route path='/sellpost' element={<SellShowPost/>}></Route>
      <Route path='/sellpostone' element={<SellAllPost/>}></Route>
    </Routes>
  );
}

export default App;
