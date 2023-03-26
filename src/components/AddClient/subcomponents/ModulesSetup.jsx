import React, { useState, useCallback } from "react";
import styles from "../addClient.module.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LastPage from "../../lastpage/LastPage";
import { Link } from "react-router-dom";

const ModulesSetup = () => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className={styles.modal}>
        <h1>Modules Setup</h1>
        <p>Select the modules that the client can use..</p>
        <div className={styles.moduleSetup}>
          <div className={styles.checkList}>
            <label>
              <input type="checkbox" checked />
              Home / Dashboard
            </label>
            <label>
              <input type="checkbox" checked />
              Helpdesk
            </label>
            <label>
              <input type="checkbox" checked />
              Assets
            </label>
            <label>
              <input type="checkbox" checked />
              Daily Tasks
            </label>
            <label>
              <input type="checkbox" checked />
              PPM
            </label>
            <label>
              <input type="checkbox" checked />
              Employees
            </label>
            <label>
              <input type="checkbox" checked />
              Profile
            </label>
            <label>
              <input type="checkbox" checked />
              Transactions
            </label>
          </div>
          <div className={styles.module}>
            <div className={styles.moduleHeader}>
              <div>
                <p>
                  Daily Tasks
                  <span>Select the sub modules that the client can use.</span>
                </p>
              </div>
              <button>Visible to Client</button>
            </div>
            <div className={styles.moduleList}>
              <label>
                <input type="checkbox" />
                Show All Sub Modules
              </label>
              <label>
                <input type="checkbox" />
                Summary
              </label>
              <label>
                <input type="checkbox" />
                View Tasks
              </label>
              <label>
                <input type="checkbox" />
                Create New Task
              </label>
              <label>
                <input type="checkbox" />
                Logbook
              </label>
              <label>
                <input type="checkbox" />
                Logsheet
              </label>
            </div>
          </div>
        </div>
        <div className={styles.bottomButton}>
          <Link to="/client-added">
            <button className={styles.saveAndContinue}>
              Save & Continue <NavigateNextIcon />{" "}
            </button>
          </Link>
          <div>
            <RestartAltIcon /> reset{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModulesSetup;
