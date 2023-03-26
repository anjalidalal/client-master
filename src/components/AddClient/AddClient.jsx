import { Box, Tab, Tabs } from "@mui/material";
import React, { useState, useRef } from "react";
import styles from "./addClient.module.css";
import CreateProfile from "./subcomponents/CreateProfile";
import PaymentSetup from "./subcomponents/PaymentSetup";
import ThemeSetup from "./subcomponents/ThemeSetup";
import ModulesSetup from "./subcomponents/ModulesSetup";

const AddClient = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <div className="container">
      <Box lassName={styles.tabsBar}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Create Profile" style={{ width: "25%" }} />
          <Tab label="Payment Setup" style={{ width: "25%" }} />
          <Tab label="Theme Setup" style={{ width: "25%" }} />
          <Tab label="Modules Setup" style={{ width: "25%" }} />
        </Tabs>
      </Box>
      {tabIndex === 0 ? (
        <CreateProfile />
      ) : tabIndex === 1 ? (
        <PaymentSetup />
      ) : tabIndex === 2 ? (
        <ThemeSetup />
      ) : (
        <ModulesSetup />
      )}
    </div>
  );
};

export default AddClient;
