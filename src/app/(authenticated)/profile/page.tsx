import React from "react";
import styles from "./pageProfile.module.scss";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className={styles.BOX}>
      <TitleContainer title="プロフィール" />
      <div className={styles.ProfileBox}>
        <p>名前</p>
        <p>山田太郎</p>
        <p>メールアドレス</p>
        <p>akfjaldf@gmail.com</p>
      </div>
      <div className={styles.ButtonGroup}>
        <Link href="/profile/edit">
          <BlueButton9036 buttonname="編集" />
        </Link>
        <Link href="/profile/changepassword">
          <BlueButton9036 buttonname="パスワード変更" />
        </Link>
        <Link href="/">
          <DarkButton9036 buttonname="戻る" />
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
