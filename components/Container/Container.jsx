import styles from "./Container.module.scss";
import React from "react";

export const Container = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
