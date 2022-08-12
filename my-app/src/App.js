import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SellPostList from "./pages/SellPostList";
import SellShowPost from "./pages/SellShowPost";
import SellAllPost from "./pages/SellAllPost";
import MainPage from "./pages/MainPage";
import Header from "./components/Header_1";
import Mypage from "./pages/MyPage";

//페이지이름변경가능
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/selllist" element={<SellPostList />}></Route>
        <Route path="/sellpost" element={<SellShowPost />}></Route>
        <Route path="/sellpostone" element={<SellAllPost />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </>
  );
}

export default App;
