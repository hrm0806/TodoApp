import React from "react";
import styles from "./detailtask.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import ChangeButton from "@/components/atoms/button/ChangeButton";

const DetailTaskPage = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/${params.id}`, {
    next: { revalidate: 5 },
  });
  const task = await res.json();

  //タスクステータス処理
  const statusClass = task.status
    ? styles.StatusFinished //true 完了の場合のスタイル
    : styles.StatusNotFinished; //false 未完了の場合のスタイル
  const statusText = task.status ? "完了" : "未完了";

  return (
    <div className={styles.BOX}>
      <TitleContainer title="TODO詳細" />
      <div className={styles.container}>
        <div className={styles.Title}>
          <div className={styles.TitleText}>{task.title}</div>
        </div>
        <div className={styles.statusBOX}>
          <ChangeButton
            id={task.id}
            status={task.status}
            title={task.title}
            content={task.content}
            statusClass={statusClass}
            statusText={statusText}
            createdAt={task.createdAt}
          />
        </div>
        <div className={styles.TextBOX}>
          <div className={styles.TODOtop}>TODO本文</div>
          <div className={styles.TodoBody}>
            <div className={styles.Todotext}>{task.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTaskPage;
