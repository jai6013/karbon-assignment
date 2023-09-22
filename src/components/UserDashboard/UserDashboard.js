import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import styles from "./userDashboard.module.scss";

const UserDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <Body />   
    </div>
  );
};

export default UserDashboard;
