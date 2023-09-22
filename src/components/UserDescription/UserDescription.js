import React, { useCallback } from "react";
import _map from "lodash/map";

import InfoBadge from "../InfoBadge/InfoBadge";
import EligibilityCircle from "../../EligibilityCircle/EligibilityCircle";

import styles from "./userDescription.module.scss";

const UserDescription = ({ userData, userInfo }) => {
  const renderInfoBadge = useCallback(
    ({ displayLabel, value }) => (
      <InfoBadge label={displayLabel} value={value} />
    ),
    []
  );
  return (
    <div className={styles.userDescription}>
      <div className={styles.nameContainer}>
        <InfoBadge label="NAME" value={userInfo?.username} containerClassName={styles.nameInfoBadge} />
        <EligibilityCircle age={userInfo?.age} />
      </div>
      <div className={styles.listContainer}>{_map(userData, renderInfoBadge)}</div>
    </div>
  );
};

export default UserDescription;
