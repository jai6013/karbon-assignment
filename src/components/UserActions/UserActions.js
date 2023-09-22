import React from "react";
import _map from "lodash/map";

import Button from "../Button.js/Button";
import { USER_ACTIONS } from "./userActions.config";

import styles from "./userActions.module.scss";

const UserActions = ({ handleViewUser, handleEditUser, handleDeleteUser }) => {
  const renderActionItem = (action) => {
    const { name, className } = action;
    let onClickFn = handleViewUser;
    if (action.name === "DELETE") {
      onClickFn = handleDeleteUser;
    } else if (action.name === "EDIT") {
      onClickFn = handleEditUser;
    }
    return (
      <Button
        buttonText={name}
        onClick={onClickFn}
        buttonClassName={className}
      />
    );
  };

  return (
    <div className={styles.userActionsContainer}>
      {_map(USER_ACTIONS, renderActionItem)}
    </div>
  );
};

export default UserActions;
