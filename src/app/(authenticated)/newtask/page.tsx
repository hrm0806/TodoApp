"use client";
import React, { useState } from "react";
import styles from "./newtaskpage.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateTaskPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value === "完了"); //完了の場合true、未完了の場合false
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      await fetch(`${API_URL}/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, status, content }),
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Task creation failed:", error);
      // エラー処理をここに追加（例：ユーザーへの通知）
    }
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
            <select
              id="status"
              value={status ? "完了" : "未完了"}
              onChange={handleStatusChange}
              className={styles.selectStatus}
            >
              <option value="未完了">未完了</option>
              <option value="完了">完了</option>
            </select>
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
