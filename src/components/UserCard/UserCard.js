import React, { useCallback } from "react";

import UserDescription from "../UserDescription/UserDescription";
import UserActions from "../UserActions/UserActions";
import { getFormattedData } from "./userCard.helper";

import styles from "./userCard.module.scss";

const UserCard = ({
  userInfo,
  handleViewUser,
  handleEditUser,
  handleDeleteUser,
}) => {
  const formattedData = getFormattedData(userInfo);
  const handleDeleteUserData = () => handleDeleteUser(userInfo?.id)
    const handleEditUserData = useCallback(() => handleEditUser(userInfo?.id),[])
  const handleViewUserData = useCallback(() => handleViewUser(userInfo?.id),[])

  return (
    <div className={styles.userCard}>
      <UserDescription userData={formattedData} userInfo={userInfo} />
      <UserActions
        handleViewUser={handleViewUserData}
        handleEditUser={handleEditUserData}
        handleDeleteUser={handleDeleteUserData}
      />
    </div>
  );
};

export default UserCard;
