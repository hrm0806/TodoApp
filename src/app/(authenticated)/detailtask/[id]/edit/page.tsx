"use client";

import React, { useEffect, useState } from "react";
import styles from "./editpage.module.scss";
import ChangeButton from "@/components/atoms/button/ChangeButton";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EditTaskPage = ({ params }: { params: { id: string } }) => {
  //paramsでidは取得できてるっぽい

  const [task, setTask] = useState<{
    title: string;
    content: string;
    status: boolean;
  } | null>(null);

  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //IDのデータ取得　status, title, contentの初期値設定を行う
  useEffect(() => {
    const fetchTask = async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/${params.id}`, {
        next: { revalidate: 5 },
      });

      const taskData = await res.json();
      const { title, content, status } = taskData; // taskDataの中身を取り出す
      setTask({ title, content, status }); // taskの状態を更新
      setTitle(title); // フェッチしたデータで初期値を設定
      setContent(content); // フェッチしたデータで初期値を設定
      setStatus(status); // フェッチしたデータで初期値を設定
    };
    fetchTask();
  }, [params.id]); // params.idが変更されたときのみ実行

  if (!task) {
    return <div>読み込み中...</div>;
  }

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
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value === "完了"); //完了の場合true、未完了の場合false
  };

  return (
    <div className={styles.Block}>
      <TitleContainer title="タスク編集" />
      <form onSubmit={handleSubmit}>
        <div className={styles.main}>
          <div className={styles.Frame234}>
            <div className={styles.Frame233}>
              <div className={styles.TODOTitle}>TODOタイトル</div>
              <input
                type="text"
                value={title} // valueをtitleに変更
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
              value={content} // value属性に状態変数を設定
              onChange={(e) => setContent(e.target.value)}
              className={styles.MainTextbox}
            ></input>
          </div>
        </div>
        <div className={styles.RegisterBox}>
          <BlueButton9036 buttonname="保存" />
        </div>
      </form>
      <div className={styles.BackBox}>
        <Link href={`/detailtask/${params.id}`}>
          <DarkButton9036 buttonname="戻る" />
        </Link>
      </div>
    </div>
  );
};

export default EditTaskPage;
