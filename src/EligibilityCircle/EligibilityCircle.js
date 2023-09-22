import React, { useCallback } from "react";
import cx from 'classnames'

import styles from "./eligibilityCircle.module.scss";

const EligibilityCircle = ({ age }) => {
  const getCircleColor = useCallback(() => {
    if (age >= 0 && age < 25) return styles.green;
    if (age >= 25 && age < 50) return styles.purple;
    else return styles.orange;
  }, [age]);
  return <div className={ cx(styles.circle, getCircleColor())}></div>;
};

export default EligibilityCircle;
