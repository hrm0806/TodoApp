import { Task } from "./types";

export const getAllTasks = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" }); //ssr

  const Tasks = await res.json();
  return Tasks;
};

export const CreateTask = async (
  title: string,
  status: string,
  content: string
): Promise<Task> => {
  const currentDatetime = new Date().toDateString();
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      status,
      content,
      createdAt: currentDatetime,
    }),
  }); //ssr

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  const Tasks = await res.json();
  return Tasks;
};
