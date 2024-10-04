import React from "react";
import styles from "./SelectButton.module.scss";

type ButtonProps = {
  buttonname: string;
};

export const SelectButton = ({ buttonname }: ButtonProps) => {
  return (
    <button className={styles.Button}>
      <div className={styles.ButtonText}>{buttonname}</div>
    </button>
  );
};
