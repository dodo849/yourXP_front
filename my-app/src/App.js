import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SellPostList from './pages/SellPostList';
import SellShowPost from './pages/SellShowPost';
import SellAllPost from './pages/SellAllPost';
import BuyPostList from './pages/BuyPostList';
import BuyAllPost from './pages/BuyAllPost';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import SignUpMainPage from './pages/SignUpMainPage';
import ChattingPage from './pages/ChattingPage';
import Point from './pages/Point';

//페이지이름변경가능
function App() {
  return (<>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/selllist' element={<SellPostList/>}></Route>
      <Route path='/selllist/post' element={<SellShowPost/>}></Route>
      <Route path='/selllist/post/1' element={<SellAllPost/>}></Route>
      <Route path='/buylist' element={<BuyPostList/>}></Route>
      <Route path='/buylist/1' element={<BuyAllPost/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
      <Route path='/signupmain' element={<SignUpMainPage/>}></Route>
      <Route path='/mypage' element={<MyPage/>}></Route>
      <Route path='/chat' element={<ChattingPage/>}></Route>
      <Route path='/point' element={<Point/>}></Route>

    </Routes>
      <Footer></Footer>
      </>
  );
}

export default App;
