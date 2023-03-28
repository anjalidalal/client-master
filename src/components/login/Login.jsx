import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./login.module.css";
import { signIn, signOut } from "../service";

const Login = () => {
  return (
    <div className={styles.signInPage}>
      <div className={styles.modal}>
        <h1>Sign In</h1>
        <button
          className={styles.signInBtn}
          onClick={() => {
            signIn();
          }}
        >
          <img src="./google.png" width="20px" height="20px" alt="" /> Sign In
          With Google{" "}
        </button>
        <p>
          * By Continuing you agree to the <span> Terms of Services</span>and{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
