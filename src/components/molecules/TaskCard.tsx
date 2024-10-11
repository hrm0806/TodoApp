import React from "react";
import styles from "./TaskCard.module.scss";
import { Task } from "@/types";
import DeleteButton from "../atoms/button/DeleteButton";
import ChangeButton from "../atoms/button/ChangeButton";
import BlueButton9036 from "../atoms/button/BlueButton90*36";
import Link from "next/link";
import { format } from "date-fns";

type TaskProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskProps) => {
  console.log("task", task);
  const statusClass = task.status
    ? styles.StatusFinished //true x完了の場合のスタイル
    : styles.StatusNotFinished; //false 未完了の場合のスタイル
  const statusText = task.status ? "完了" : "未完了";

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      date.setHours(date.getHours() + 9);
      return format(date, "yyyy/MM/dd HH:mm:ss");
    } catch (error) {
      console.error("Date parsing error:", error);
      return "Invalid Date";
    }
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
        createdAt={task.created_at}
      />
      {task.content}
      <div className={styles.Date}>{formatDate(task.created_at)}</div>
      <div className={styles.EditButtonArea}>
        <Link href={`/detailtask/${task.id}`}>
          <BlueButton9036 buttonname="詳細" />
        </Link>
      </div>
      <div className={styles.DeleteButtonArea}>
        <DeleteButton buttonname="削除" id={task.id} />
      </div>
    </div>
  );
};
