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
      <div className={styles.Date}>
        {new Date(task.createdAt).toLocaleString()}
      </div>
      <div className={styles.DeleteButton}>
        <DeleteButton buttonname="削除" id={task.id} />
      </div>
    </div>
  );
};
