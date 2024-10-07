import React, { useState } from "react";
import styles from "./SelectBox.module.scss";
import { SelectButton } from "../atoms/button/SelectButton";
import { Filter } from "@/types";

type SelectBoxProps = {
  handleFilter: (filter: Filter) => void;
};

export const SelectBox = ({ handleFilter }: SelectBoxProps) => {
  return (
    <div className={styles.Select}>
      <button
        onClick={() => handleFilter("all")}
        value="all"
        className={styles.Button}
      >
        <div className={styles.ButtonText}>全てのタスク</div>
      </button>
      <button
        onClick={() => handleFilter("unchecked")}
        value="unchecked"
        className={styles.Button}
      >
        <div className={styles.ButtonText}>未完了のタスク</div>
      </button>
      <button
        onClick={() => handleFilter("checked")}
        value="checked"
        className={styles.Button}
      >
        <div className={styles.ButtonText}>完了済みのタスク</div>
      </button>
    </div>
  );
};
