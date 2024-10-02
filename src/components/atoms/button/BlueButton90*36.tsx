import React from "react";
import styles from "./BlueButton90*36.module.scss";

type ButtonProps = {
  buttonname: string;
};

const BlueButton9036 = ({ buttonname }: ButtonProps) => {
  return (
    <button type="submit" className={styles.Bluebutton}>
      <div className={styles.Bluebuttontext}>{buttonname}</div>
    </button>
  );
};

export default BlueButton9036;
