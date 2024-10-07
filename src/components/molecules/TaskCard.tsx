import React from "react";
import styles from "./TaskCard.module.scss";
import { Task } from "@/types";
import DeleteButton from "../atoms/button/DeleteButton";
import ChangeButton from "../atoms/button/ChangeButton";

type TaskProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskProps) => {
  const statusClass = task.status
    ? styles.StatusFinished //true 完了の場合のスタイル
    : styles.StatusNotFinished; //false 未完了の場合のスタイル
  const statusText = task.status ? "完了" : "未完了";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Tokyo", // 日本時間で表示
    });
  };

  return (
    <div className={styles.TaskCard}>
      <div className={styles.Title}>{task.title}</div>
      <ChangeButton
        id={task.id}
        status={task.status}
        title={task.title}
        content={task.content}
        statusClass={statusClass}
        statusText={statusText}
        createdAt={task.createdAt}
      />
      {task.content}
      <div className={styles.Date}>{formatDate(task.createdAt)}</div>
      <div className={styles.DeleteButton}>
        <DeleteButton buttonname="削除" id={task.id} />
      </div>
    </div>
  );
};
