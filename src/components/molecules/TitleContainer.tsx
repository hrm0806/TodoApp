import React from "react";
import styles from "./TitleContainer.module.scss";

type TitleContainerProps = {
  title: string;
};

export const TitleContainer = ({ title }: TitleContainerProps) => {
  return (
    <div className={styles.Block}>
      <div className={styles.BOX}>
        <div className={styles.container}>
          <div className={styles.AppBar}>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
