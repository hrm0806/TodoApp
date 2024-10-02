"use client";
import React, { useState } from "react";
import styles from "./newtaskpage.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import { create } from "domain";
import { CreateTask } from "@/TaskAPI";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateTaskPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await CreateTask(title, status, content);
    router.push("/");
    router.refresh();
  };

  return (
    <div className={styles.Block}>
      <TitleContainer title="新規登録" />

      <form onSubmit={handleSubmit}>
        <div className={styles.main}>
          <div className={styles.Frame234}>
            <div className={styles.Frame233}>
              <div className={styles.TODOTitle}>TODOタイトル</div>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className={styles.InputTitle}
              ></input>
            </div>
          </div>
          <div className={styles.Frame235}>
            <div className={styles.StatusTitle}>ステータス</div>
            <input
              type="text"
              onChange={(e) => setStatus(e.target.value)}
              className={styles.selectStatus}
            ></input>
          </div>

          <div className={styles.MainText}>
            <div className={styles.MainTextTitle}>TODO本文</div>
            <input
              type="text"
              onChange={(e) => setContent(e.target.value)}
              className={styles.MainTextbox}
            ></input>
          </div>
        </div>
        <div className={styles.RegisterBox}>
          <BlueButton9036 buttonname="登録" />
        </div>
      </form>
      <div className={styles.BackBox}>
        <Link href="/">
          <DarkButton9036 buttonname="戻る" />
        </Link>
      </div>
    </div>
  );
};

export default CreateTaskPage;
