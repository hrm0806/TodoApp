import Link from "next/link";
import styles from "./pageSignup.module.scss";
export default function SignupPage() {
  return (
    <div className={styles.Box}>
      <div className={styles.Top}>
        <div className={styles.TopGroup}>
          <div className={styles.Title}>アカウントを新規作成</div>
          <div className={styles.TitleContent}>
            アカウントに作成するには、以下の情報を入力してください。
          </div>
        </div>
      </div>
      <div className={styles.SubTitle}>
        <div className={styles.SubTitleText}> メールアドレス</div>
      </div>
      <input
        type="text"
        placeholder="メールアドレス"
        className={styles.Input}
      />
      <div className={styles.SubTitle}>
        <div className={styles.SubTitleText}> パスワード</div>
      </div>
      <input type="text" placeholder="パスワード" className={styles.Input} />
      <div className={styles.SubTitle}>
        <div className={styles.SubTitleText}>確認用パスワード</div>
      </div>
      <input
        type="text"
        placeholder="確認用パスワード"
        className={styles.Input}
      />
      <div className={styles.ButtonBox}>
        <button className={styles.Button}>
          <div className={styles.ButtonText}>登録</div>
        </button>
      </div>
      <Link href="/login">
        <button className={styles.CancelButton}>キャンセル</button>
      </Link>
    </div>
  );
}
