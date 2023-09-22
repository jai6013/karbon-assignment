import React, { useEffect, useState } from "react";
import cx from 'classnames'

import {
  dispatchStorageEvent,
  getGlobalItem,
  setGlobalItem,
  uniqueID,
} from "../utils/helper";
import styles from "./userModal.module.scss";
import Modal from "../Modal/Modal";
import { defaultDetails } from "./userModal.helper";

const UserModal = ({
  isOpen,
  handleModalClose,
  userDetails: existingUserDetails,
  isView = false,
  handleUpdateUsersList
}) => {
  const [userDetails, setUserDetails] = useState(defaultDetails);
  const handleChange = (e) => {
    const { value, name } = e.currentTarget;

    if (name === "dob") {
      const currentYear = new Date().getFullYear();
      const inputYear = Number(value.split("-")[0]);
      const age = (currentYear - inputYear).toString();

      setUserDetails({ ...userDetails, [name]: value, age });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getGlobalItem("allUsersData");

    if (userDetails?.id) {
      const updatedUsers = users.map((el, idx) => {
        if (el.id === userDetails.id) {
          return userDetails;
        } else {
          return el;
        }
      });
      setGlobalItem("allUsersData", updatedUsers);
      handleUpdateUsersList(updatedUsers)
    } else {
      const newUser = {
        ...userDetails,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: uniqueID(),
      };

      if (users){
        const usersData = [...users, newUser]
        handleUpdateUsersList(usersData)
        setGlobalItem("allUsersData",usersData );
      } 
      else {
        handleUpdateUsersList([newUser])
        setGlobalItem("allUsersData", [newUser]);
      }
    }
    handleClose();
  };

  const handleClose = () => {
    setUserDetails(defaultDetails);
    handleModalClose();
    dispatchStorageEvent();
  };

  useEffect(() => {
    if (existingUserDetails?.id && isOpen) {
      setUserDetails(existingUserDetails);
    } else {
      setUserDetails(defaultDetails);
    }
  }, [existingUserDetails, isOpen]);

  return (
    <Modal isModalOpen={isOpen} handleModalClose={handleModalClose}>
      <div className={styles.modalParentContainer}>
        <div className={styles.modalHeader}>
          {isView ? "VIEW" : userDetails?.id ? "EDIT" : "ADD"} USER
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formRow}>
        <div className={styles.formInputGroup}>
          <label htmlFor="username">
            NAME
            <sup className={styles.red}>*</sup>
          </label>
          <input
            id="username"
            className={ styles.customInput}
            name="username"
            onChange={handleChange}
            value={userDetails.username}
            required
            title="Please enter user name"
            disabled={isView}
          />
        </div>

        <div className={styles.formInputGroup}>
          <label htmlFor="age">
            AGE<sup className={(styles.red, styles.invisible)}>*</sup>
          </label>
          <input
            id="age"
            className={styles.customInput}
            name="age"
            onChange={handleChange}
            value={userDetails.age}
            disabled={true}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formInputGroup}>
          <label htmlFor="dob">
            DOB<sup className={styles.red}>*</sup>
          </label>
          <input
            id="dob"
            className={styles.customInput}
            name="dob"
            type="date"
            onChange={handleChange}
            value={userDetails.dob}
            max={new Date().toISOString().split("T")[0]}
            required
            title="Please select dob"
            disabled={isView}
          />
        </div>

        <div className={styles.formInputGroup}>
          <label htmlFor="gender">
            GENDER<sup className={styles.red}>*</sup>
          </label>
          <div className={styles.genderContainer}>
            <div>
              <input
                id="male"
                className={styles.customInput}
                name="gender"
                value={"MALE"}
                checked={userDetails.gender === "MALE"}
                type="radio"
                onChange={handleChange}
                required
                title="Please select any one gender"
                disabled={isView}
              />{" "}
              <label htmlFor="male">MALE</label>
            </div>

            <div>
              <input
                id="female"
                className={styles.customInput}
                name="gender"
                value={"FEMALE"}
                checked={userDetails.gender === "FEMALE"}
                type="radio"
                onChange={handleChange}
                required
                disabled={isView}
              />{" "}
              <label htmlFor="female">FEMALE</label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formInputGroup}>
          <label htmlFor="username">
            FAVOURITE FOOD<sup className="red">*</sup>
          </label>
          <select
            className={styles.customInput}
            placeholder="Select favourite food"
            value={userDetails.food}
            onChange={handleChange}
            name="food"
            required
            title="Please select favourite food"
            disabled={isView}
          >
            <option value={""} disabled={true}>
              Select favourite food
            </option>
            <option value={"PIZZA"}>PIZZA</option>
            <option value={"BURGER"}>BURGER</option>
            <option value={"PASTA"}>PASTA</option>
          </select>
        </div>

        <div className={styles.formInputGroup}>
          <label htmlFor="hobbies">
            HOBBIES<sup className={cx(styles.red, styles.invisible)}>*</sup>
          </label>
          <textarea
            id="hobbies"
            className="custom-input"
            name="hobbies"
            onChange={handleChange}
            value={userDetails.hobbies}
            style={{ width: "80%" }}
            rows={5}
            disabled={isView}
          />
        </div>
      </div>

      <div className={styles.formFooter}>
        {isView ? (
          <button type="button" className={styles.blueBtn} onClick={handleClose}>
            Close
          </button>
        ) : (
          <>
            <button type="button" className={styles.orangeBtn} onClick={handleClose}>
              Cancel
            </button>

            <button type="submit" className={styles.blueBtn}>
              Submit
            </button>
          </>
        )}
      </div>
    </form>
      </div>
    </Modal>
  );
};

export default UserModal;
