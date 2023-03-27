import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import LastPage from "./lastpage/LastPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/client-added" element={<LastPage />} />
      </Routes>
    </>
  );
};

export default Router;
