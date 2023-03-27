import styles from "./lastpage.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { Navigate, useNavigate } from "react-router-dom";

const LastPage = () => {
  const [btnStyle, setBtnStyle] = useState(false);
  console.log(data);
  const navigate = useNavigate();

  const handleClick = () => {
    setBtnStyle(false);
    navigate("/");
  };

  return (
    <>
      <div className={styles.lastpage}>
        <div className={styles.lastpageHeader}>
          <div className={styles.heading}>
            <h1>Add Clients</h1>
            <p>
              Client Master
              <span>/ Add Clients</span>
            </p>
          </div>
          <div className={styles.lastpageHeaderButtons}>
            <button
              onClick={() => setBtnStyle(true)}
              className={!btnStyle ? styles.greyButton : styles.blueButton}
            >
              Add More Clients
            </button>
            <button
              onClick={() => handleClick()}
              className={btnStyle ? styles.greyButton : styles.blueButton}
            >
              Go to Client Master
            </button>
          </div>
        </div>
        <div className={styles.companyCardsComponent}>
          {data.map((el) => (
            <div className={styles.card}>
              <img src={el.icon} alt="" />
              <h1>{el.company}</h1>
              <p>{el.tenants}</p>
              <button>View All</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LastPage;
