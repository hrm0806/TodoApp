"use client";
import React from "react";
import styles from "./DeleteButton.module.scss";
import { useRouter } from "next/navigation";

type ButtonProps = {
  id: string;
  buttonname: string;
};

const DeleteButton = ({ buttonname, id }: ButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    if (confirm("本当にこのタスクを削除しますか？")) {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      await fetch(`${API_URL}/api/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      router.refresh();
    }
  };

  return (
    <button className={styles.Darkbutton} onClick={handleDelete}>
      <div className={styles.Darkbuttontext}>{buttonname}</div>
    </button>
  );
};

export default DeleteButton;
