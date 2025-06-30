import { useState } from "react";
import { About } from "./components/About";
import Homepage from "./components/homepage";
import { Route, Routes } from "react-router-dom";
import { NoPageFound } from "./components/NoPageFound";
import { Post } from "./components/Post";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
