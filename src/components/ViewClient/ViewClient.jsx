import React, { useState } from "react";
import styles from "./viewclient.module.css";
import data from "../data";
import SearchIcon from "@mui/icons-material/Search";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const ViewClient = () => {
  return (
    <div className={styles.main}>
      <div className={styles.tableSearchBar}>
        <div className={styles.searchBar}>
          <SearchIcon color="disabled" fontSize="small" />
          <input type="text" placeholder="Search modules"></input>
        </div>
        <div className={styles.searchBarButtons}>
          <button className={styles.columns}>
            Columns
            <KeyboardArrowDownIcon />
          </button>
          <button className={styles.export}>
            <SaveAltIcon fontSize="small" style={{ color: "#153AC7" }} />
            Export
          </button>
        </div>
      </div>
      <div className={styles.viewClientContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.companyRow}>Company Name</div>
          <div className={styles.emailRow}>Email Address</div>
          <div className={styles.phoneRow}>Phone No</div>
          <div className={styles.contactRow}>Contact Person</div>
          <div className={styles.facilitatorRow}>Facilitator</div>
          <div className={styles.sitesRow}>Sites</div>
          <div className={styles.tenantsRow}>Tenants</div>
          <div className={styles.actionsRow}>Actions</div>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.company}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                <img src={el.icon} alt="" className={styles.logo} />
                {el.company}
              </p>
            ))}
          </div>
          <div className={styles.email}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.email}
              </p>
            ))}
          </div>
          <div className={styles.phone}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.contact}
              </p>
            ))}
          </div>
          <div className={styles.contact}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.name}
              </p>
            ))}
          </div>
          <div className={styles.facilitator}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.facilitator}
              </p>
            ))}
          </div>
          <div className={styles.sites}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.sites}
              </p>
            ))}
          </div>
          <div className={styles.tenants}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                {el.tenants}
              </p>
            ))}
          </div>
          <div className={styles.actions}>
            {data.map((el) => (
              <p className={styles.row} key={el.id}>
                <img src={el.action} width="16px" height="16px" alt="" />
              </p>
            ))}
          </div>
        </div>
        <div className={styles.tableFooter}>
          <div className={styles.tablePages}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>..</p>
            <p>48</p>
            <p>49</p>
          </div>
          <div>
            <button className={styles.previous}>
              {" "}
              <NavigateBeforeRoundedIcon
                fontSize="small"
                color="disabled"
              />{" "}
              Previous
            </button>
            <button className={styles.next}>
              {" "}
              Next
              <NavigateNextIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClient;
