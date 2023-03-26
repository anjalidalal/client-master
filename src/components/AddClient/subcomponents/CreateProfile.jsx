import React, { useState, useCallback } from "react";
import styles from "../addClient.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ModulesSetup from "./ModulesSetup";
import ThemeSetup from "./ThemeSetup";
import PaymentSetup from "./PaymentSetup";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

const CreateProfile = () => {
  const [nextTab, setNextTab] = useState(false);

  const handleClick = useCallback(() => {
    setNextTab(true);
  }, []);

  return (
    <>
      {!nextTab ? (
        <>
          <div className={styles.modal}>
            <h1>Create Client Profile</h1>
            <p>Add some basic information related to the client.</p>
            <div className={styles.logoContainer}>
              <div className={styles.uploadLogo}>
                <IconButton
                  color="disabled"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <AddRoundedIcon />
                </IconButton>
              </div>
              <p>
                Company Logo{" "}
                <span>
                  Logo ratio shoud be 1:1 and should be 120px X 120 px
                </span>
              </p>
            </div>
            <div className={styles.form}>
              <TextField
                id="outlined-basic"
                label="Company Name"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Select Business Category *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Company Email Address *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Select State *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="GST Number *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Website"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Select Facility Management Company *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Select City *"
                size="small"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Fax Number"
                size="small"
                variant="outlined"
              />
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
        </>
      ) : (
        <PaymentSetup />
      )}
    </>
  );
};

export default CreateProfile;
