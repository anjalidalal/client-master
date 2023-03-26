import React from "react";
import { Route, Routes } from "react-router";
import LastPage from "./lastpage/LastPage";
import Login from "./login/Login";
import SideNav from "./sideNavbar/SideNav";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/client-master" element={<SideNav />} />
        <Route path="/client-added" element={<LastPage />} />
      </Routes>
    </>
  );
};

export default Router;
