"use client";

import React, { useState } from "react";
import styles from "./SelectBox.module.scss";
import { SelectButton } from "../atoms/button/SelectButton";

export const SelectBox = () => {
  const [select, setSelect] = useState("全てのタスク");
  return (
    <div className={styles.Select}>
      <SelectButton buttonname="全てのタスク" />
      <SelectButton buttonname="未完了のタスク" />
      <SelectButton buttonname="完了済みのタスク" />
    </div>
  );
};
