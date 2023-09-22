import React from "react";
import cx from "classnames";

import styles from "./heading.scss";

const Heading = ({ title, headingClassName }) => {
  return <div className={cx(styles.heading, headingClassName)}>{title}</div>;
};

export default Heading;
