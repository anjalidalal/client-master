import React, { useEffect } from "react";
import Home from "./components/Home";
import SideNav from "./components/sideNavbar/SideNav";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/Action";
import { auth } from "./components/service";
import LastPage from "./components/lastpage/LastPage";
import { useSelector } from "react-redux";
import Login from "./components/login/Login";

const App = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
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
  return <>{user ? <Home /> : <Login />}</>;
};

export default App;
