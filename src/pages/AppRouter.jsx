import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRouter from "../components/PrivateRouter";
import About from "./About";
import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

const AppRouter = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/detail/:details" element={<PrivateRouter user={user} />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="/about" element={<PrivateRouter user={user} />}>
        <Route path="" element={<About />} />
        </Route>
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
