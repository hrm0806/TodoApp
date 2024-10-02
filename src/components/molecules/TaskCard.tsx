import React from "react";
import styles from "./TaskCard.module.scss";
import { Task } from "@/types";

type TaskProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskProps) => {
  const statusClass = task.status
    ? styles.StatusFinished //true 完了の場合のスタイル
    : styles.StatusNotFinished; //false 未完了の場合のスタイル
  const statusText = task.status ? "完了" : "未完了";

  return (
    <div className={styles.TaskCard}>
      <div className={styles.Title}>{task.title}</div>
      <div className={statusClass}>{statusText}</div>
      {task.content}
      <div className={styles.Date}>
        {new Date(task.createdAt).toLocaleString()}
      </div>
    </div>
  );
};
