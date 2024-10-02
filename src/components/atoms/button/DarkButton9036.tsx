import React from "react";
import styles from "./DarkButton9036.module.scss";

type ButtonProps = {
  buttonname: string;
};

const DarkButton9036 = ({ buttonname }: ButtonProps) => {
  return (
    <button className={styles.Darkbutton}>
      <div className={styles.Darkbuttontext}>{buttonname}</div>
    </button>
  );
};

export default DarkButton9036;
