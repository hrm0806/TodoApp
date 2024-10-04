import { Task } from "./types";

export const getAllTasks = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" }); //ssr

  const Tasks = await res.json();
  return Tasks;
};

export const createTask = async (
  title: string,
  status: boolean,
  content: string
): Promise<Task> => {
  const currentDatetime = new Date().toISOString();
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

  const newTasks = await res.json();
  return newTasks;
};

export const deleteTask = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  const deleteTasks = await res.json();
  return deleteTasks;
};

export const changeTask = async (
  id: string,
  title: string,
  status: boolean,
  content: string,
  createdAt: string
): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      status,
      content,
      createdAt,
    }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  const changeTask = await res.json();
  return changeTask;
};
