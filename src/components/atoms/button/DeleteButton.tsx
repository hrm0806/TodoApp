"use client";
import React from "react";
import styles from "./DeleteButton.module.scss";
import { deleteTask } from "@/TaskAPI";
import { useRouter } from "next/navigation";

type ButtonProps = {
  id: string;
  buttonname: string;
};

const DeleteButton = ({ buttonname, id }: ButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteTask(id);
    router.refresh();
  };

  return (
    <button className={styles.Darkbutton} onClick={handleDelete}>
      <div className={styles.Darkbuttontext}>{buttonname}</div>
    </button>
  );
};

export default DeleteButton;
