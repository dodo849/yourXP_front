import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SellPostList from './pages/SellPostList';
import SellShowPost from './pages/SellShowPost';
import SellAllPost from './pages/SellAllPost';
import BuyPostList from './pages/BuyPostList';
import BuyAllPost from './pages/BuyAllPost';

//페이지이름변경가능
function App() {
  return (
    <Routes>
      <Route path='/selllist' element={<SellPostList/>}></Route>
      <Route path='/selllist/post' element={<SellShowPost/>}></Route>
      <Route path='/selllist/post/1' element={<SellAllPost/>}></Route>
      <Route path='/buylist' element={<BuyPostList/>}></Route>
      <Route path='/buylist/1' element={<BuyAllPost/>}></Route>
    </Routes>
  );
}

export default App;
