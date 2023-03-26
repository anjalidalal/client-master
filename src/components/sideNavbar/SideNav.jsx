import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ViewClient from "../ViewClient/ViewClient";
import AddClient from "../AddClient/AddClient";
import { useSelector } from "react-redux";
import profile from "./profile.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "../service";

const SideNav = () => {
  const [disabled, setDisabled] = useState(true);
  const user = useSelector((state) => state.user);

  return (
    <div className="home">
      <div className="sideNavContainer">
        <div className="sideNav">
          <h1>Company Name</h1>
          <div className="searchBar">
            <SearchIcon color="disabled" fontSize="small" />
            <input type="text" placeholder="Search modules"></input>
          </div>
          <p>Client Master</p>
          <button
            className={disabled ? "ableButton" : "disabledButton"}
            onClick={() => setDisabled(true)}
          >
            View Clients
          </button>
          <button
            className={!disabled ? "ableButton" : "disabledButton"}
            onClick={() => setDisabled(false)}
          >
            Add Clients
          </button>
        </div>
        <div className="sideNavFooter">
          <div>
            {" "}
            <img src={user?.photo && profile} alt="" />
            <p>
              {user?.displayName}
              <span>{user?.email}</span>
            </p>
          </div>
          <button className="logoutBtn" onClick={signOut}>
            <LogoutIcon color="disabled" fontSize="small" />
          </button>
        </div>
      </div>
      <div className="clientMaster">
        <div className="titleBar">
          <h1>{disabled ? "View Clients" : "Add Clients"}</h1>

          <p>
            Client Master
            <span>{disabled ? "/ View Clients" : "/ Add Clients"}</span>
          </p>
        </div>
        <>{disabled ? <ViewClient /> : <AddClient />}</>
      </div>
    </div>
  );
};

export default SideNav;
