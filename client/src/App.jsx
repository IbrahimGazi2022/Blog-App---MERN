import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/userBlogs";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/my-blogs" element={<UserBlogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;
