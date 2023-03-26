import React, { useState } from "react";
import styles from "../addClient.module.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CreateProfile from "./CreateProfile";
import ThemeSetup from "./ThemeSetup";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const PaymentSetup = () => {
  const [nextTab, setNextTab] = useState(false);
  const handleClick = () => {
    setNextTab(true);
  };
  return (
    <>
      {nextTab ? (
        <ThemeSetup />
      ) : (
        <div className={styles.modal}>
          <h1>Payment Setup</h1>
          <p>Set up payments for the client. </p>
          <div className={styles.paymentSetupForm}>
            <TextField
              id="outlined-basic"
              label="Billing Address *"
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
              label="Select State *"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Pincode *"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Rs. Payable Amount per Site *"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Select Number of Site Access *"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Discount (%) *"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Reason *"
              size="small"
              variant="outlined"
            />
            <div className={styles.checkboxes}>
              <p>Payment Mode</p>
              <div>
                <label>
                  <Checkbox size="string" /> UPI
                </label>
                <label>
                  {" "}
                  <Checkbox size="string" />
                  Cash
                </label>
                <label>
                  {" "}
                  <Checkbox size="string" />
                  Cheque
                </label>
                <label>
                  {" "}
                  <Checkbox size="string" />
                  Other
                </label>
              </div>
            </div>
            <div className={styles.radioButton}>
              <p>Payment Status</p>
              <div>
                <label>
                  <input type="radio" size="medium" />
                  Paid
                </label>
                <label>
                  {" "}
                  <input type="radio" />
                  Pending
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
      )}
    </>
  );
};

export default PaymentSetup;
