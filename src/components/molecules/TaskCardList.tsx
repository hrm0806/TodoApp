import React from "react";
import styles from "./TaskCardList.module.scss";
import { TaskCard } from "./TaskCard";
import { getAllTasks } from "@/TaskAPI";
import { Task } from "@/types";

export const TaskCardList = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/`, { cache: "no-store" }); // SSRで/apiを使用

  if (!res.ok) {
    const errorText = await res.text(); // エラーメッセージを取得
    console.error(`Failed to fetch data: ${res.status}`);
    return;
  }
  const tasks = await res.json();

  return (
    <div className={styles.TaskListFrame}>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
