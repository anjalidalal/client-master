import React from "react";
import SideNav from "./sideNavbar/SideNav";
import Login from "./login/Login";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{user ? <SideNav /> : <Login />}</>;
};
export default Home;
