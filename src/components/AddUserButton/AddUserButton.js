import React, { useCallback } from "react";
import Button from "../Button.js/Button";

import styles from "./addUserButton.module.scss";

const AddUserButton = ({handleOpenUserModal}) => {
  const handleOnclick = useCallback(() => {
    handleOpenUserModal(undefined, )
  }, []);

  return (
    <Button
      buttonText={`ADD USERS`}
      buttonClassName={styles.addUserButton}
      onClick={handleOnclick}
    />
  );
};

export default AddUserButton;
