import Link from "next/link";
import styles from "./pageLogin.module.scss";

export default async function LoginPage() {
  return (
    <div className={styles.Box}>
      <div className={styles.TitleBox}>
        <div className={styles.TitleFrame}>
          <div className={styles.Title}>タスク管理アプリ</div>
        </div>
      </div>
      <div className={styles.Top}>
        <div className={styles.TopGroup}>
          <div className={styles.Title}>アカウントにログイン</div>
          <div className={styles.TitleContent}>
            ログインするには、以下の情報を入力してください。
          </div>
        </div>
      </div>
      <div className={styles.SubTitle}>
        <div className={styles.SubTitleText}>メールアドレス</div>
      </div>
      <input
        type="text"
        placeholder="メールアドレス"
        className={styles.Input}
      ></input>
      <div className={styles.SubTitle}>
        <div className={styles.SubTitleText}>パスワード</div>
      </div>
      <input
        type="texr"
        placeholder="パスワード"
        className={styles.Input}
      ></input>
      <div className={styles.SelectBox}>
        <button className={styles.Button}>
          <div className={styles.Text}>ログイン</div>
        </button>
        <div className={styles.Bar}>または</div>
        <Link href="/login/signup">
          <button className={styles.Button}>
            <div className={styles.Text}>新規登録</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
