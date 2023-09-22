import React, { useCallback } from "react";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";

import UserCard from "../UserCard/UserCard";
import styles from "./usersList.module.scss";

const UsersList = ({
  usersList,
  handleViewUser,
  handleEditUser,
  handleDeleteUser,
}) => {
  const renderUserCard = (user) => (
    <UserCard
      userInfo={user}
      handleViewUser={handleViewUser}
      handleEditUser={handleEditUser}
      handleDeleteUser={handleDeleteUser}
    />
  );

  return (
    <div className={styles.usersListContainer}>
      {!_isEmpty(usersList) ? (
        _map(usersList, renderUserCard)
      ) : (
        <div className={styles.noUserFound}>No Users Found</div>
      )}
    </div>
  );
};

export default UsersList;
