import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../components/globalStyles/GlobalStyle";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";
import Logout from "../pages/logout/Logout";

const AppRouter = () => {
  const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="about" element={<PrivateRouter user={user} />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter user={user} />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
