import React, { useCallback } from "react";
import styles from "../addClient.module.css";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CreateProfile from "./CreateProfile";
import ModulesSetup from "./ModulesSetup";
import PaymentSetup from "./PaymentSetup";
import { useState } from "react";

const ThemeSetup = () => {
  const [nextTab, setNextTab] = useState(false);

  const handleClick = useCallback(() => {
    setNextTab(true);
  }, []);

  return (
    <>
      {!nextTab ? (
        <div className={styles.themeSetup}>
          <h1>Theme Setup</h1>
          <p>
            Add information about the client to give them a personalized
            experience.
          </p>
          <div className={styles.colorTheme}>
            <TextField fullWidth label="Primary Color" size="small" />
            <p>Add Hex Value.</p>
          </div>
          <div className={styles.loginTheme}>
            <p>Login Theme</p>
            <span>Select the look and feel of the login page.</span>
            <label>
              <input type="radio" />
              Use Color
            </label>
            <input type="text" placeholder="Enter Color" />
          </div>
          <div className={styles.positionTheme}>
            <p>Where Should be the login modal?</p>
            <div>
              <div className={styles.left}>
                <div>
                  <div className={styles.rectangle}></div>
                </div>
                <label>
                  <input type="radio" name="" id="" />
                  Left
                </label>
              </div>
              <div className={styles.right}>
                <div>
                  {" "}
                  <div className={styles.rectangle}></div>
                </div>
                <label>
                  <input type="radio" name="" id="" />
                  Right
                </label>
              </div>
              <div className={styles.center}>
                <div>
                  {" "}
                  <div className={styles.rectangle}></div>
                </div>
                <label>
                  <input type="radio" name="" id="" />
                  Center
                </label>
              </div>
            </div>
          </div>
          <div className={styles.bottomButton}>
            <button onClick={handleClick}>
              Save & Continue <NavigateNextIcon />{" "}
            </button>
            <div>
              <RestartAltIcon /> reset{" "}
            </div>
          </div>
        </div>
      ) : (
        <ModulesSetup />
      )}
    </>
  );
};

export default ThemeSetup;
