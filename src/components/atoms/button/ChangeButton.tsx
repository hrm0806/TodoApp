"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { changeTask } from "@/TaskAPI";

type StatusProps = {
  id: string;
  status: boolean;
  title: string;
  content: string;
  createdAt: string;
  statusClass: string;
  statusText: string;
};

const ChangeButton = ({
  id,
  status,
  title,
  content,
  statusClass,
  statusText,
  createdAt,
}: StatusProps) => {
  const router = useRouter();
  const handleChange = async () => {
    await changeTask(id, title, !status, content, createdAt);
    router.refresh();
  };

  return (
    <button onClick={handleChange} className={statusClass}>
      {statusText}
    </button>
  );
};

export default ChangeButton;
