"use client";

import React, { useState } from "react";
import styles from "./newtaskpage.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";

const Page = () => {
  const [title, setTitle] = useState("");

  return (
    <div className={styles.Block}>
      <TitleContainer title="新規登録" />
      <div className={styles.main}>
        <div className={styles.Frame234}>
          <div className={styles.Frame233}>
            <div className={styles.TODOTitle}>TODOタイトル</div>
            <input
              type="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.InputTitle}
            ></input>
          </div>
        </div>
        <div className={styles.Frame235}>
          <div className={styles.StatusTitle}>ステータス</div>
          <div className={styles.selectStatus}></div>
        </div>

        <div className={styles.MainText}>
          <div className={styles.MainTextTitle}>TODO本文</div>
          <div className={styles.MainTextbox}></div>
        </div>
      </div>
      <div className={styles.BackBox}>
        <div className={styles.BackButton}>
          <div className={styles.BackButtonText}>戻る</div>
        </div>
      </div>
      <div className={styles.RegisterBox}>
        <BlueButton9036 buttonname="登録" />
      </div>
    </div>
  );
};

export default Page;
