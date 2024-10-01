import React from "react";
import styles from "./newtaskpage.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";

const Page = () => {
  return (
    <div className={styles.Block}>
      <TitleContainer title="新規登録" />
    </div>
  );
};

export default Page;
