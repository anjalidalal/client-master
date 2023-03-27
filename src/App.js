import React, { useEffect } from "react";
import Home from "./components/Home";
import SideNav from "./components/sideNavbar/SideNav";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/Action";
import { auth } from "./components/service";
import Routes from "../src/components/Routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photo: user.photoURL,
          phoneNumber: user.phoneNumber,
        })
      );
    });
  }, []);
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
