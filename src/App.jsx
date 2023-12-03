import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Agents from "./pages/Agents";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AgentDetail from "./pages/AgentDetail";
import BlogDetail from "./pages/blogDetail";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../redux/userSlice";
import axios from "axios";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setUserDetail(res.data));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/detail/:id" element={<AgentDetail />} />
        <Route path="/blog/detail/:id" element={<BlogDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/detail/:id" element={<PropertyDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
