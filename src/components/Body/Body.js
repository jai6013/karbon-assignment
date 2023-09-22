import React, { useEffect, useState } from "react";
import _isEmpty from 'lodash/isEmpty'

import HeadingWithUserButton from "../HeadingWithUserButton/HeadingWithUserButton";
import UsersList from "../UsersList/UsersList";
import UserModal from "../UserModal/UserModal";
import { getGlobalItem, setGlobalItem } from "../utils/helper";

import styles from "./body.module.scss";

const Body = () => {
  const [usersList, setUsersList] = useState([]);
  const [modalDetails, setModalDetails] = useState({
    isOpen: false,
    userDetails: undefined,
    isView: false,
  });

  const handleUserModalClose = () => {
    setModalDetails({
      ...modalDetails,
      isOpen: false,
      isView: false,
      userDetails: undefined,
    });
  };

  const handleUserModalOpen = (id, isView) => {
    if (id) {
      const allUsers = getGlobalItem("allUsersData");
      const user = allUsers.find((el) => {
        if (el.id === id) return el;
        return null;
      });

      setModalDetails({
        ...modalDetails,
        isOpen: true,
        userDetails: user,
        isView,
      });
    } else {
      setModalDetails({
        ...modalDetails,
        isOpen: true,
        isView: false,
        userDetails: undefined,
      });
    }
  };

  const handleViewUser = (id) => {
    handleUserModalOpen(id, true);
  };

  const handleEditUser = (id) => {
    handleUserModalOpen(id);
  };

  const handleDeleteUser = (key) => {
    let newUsersList = usersList.filter(({ id }) => id !== key);
    setGlobalItem("allUsersData", newUsersList);
    setUsersList(prev => newUsersList);
  };

  const handleUpdateUsersList = (usersList) => {
    setUsersList(usersList);
  };

  useEffect(() => {
    const usersList = getGlobalItem("allUsersData");
    if(!_isEmpty(usersList)){
      setUsersList(usersList)
    }
  },[])

  return (
    <div className={styles.body}>
      <HeadingWithUserButton handleUserModalOpen={handleUserModalOpen} />
      <UsersList
        usersList={usersList}
        handleViewUser={handleViewUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <UserModal
        isOpen={modalDetails.isOpen}
        handleModalClose={handleUserModalClose}
        userDetails={modalDetails?.userDetails}
        isView={modalDetails.isView}
        handleUpdateUsersList={handleUpdateUsersList}
      />
    </div>
  );
};

export default Body;
