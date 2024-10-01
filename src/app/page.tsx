import styles from "./pageHome.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.newcard}>
        <div className={styles.newbutton}></div>
      </div>
      <div className={styles.BOX}>
        <div className={styles.container}>
          <div className={styles.AppBar}>
            <div className={styles.title}>TODO一覧</div>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.searchtext}>検索</div>
          <div className={styles.searchbox}>
            <div className={styles.searchboxin}>
              <input className={styles.searchinputtext}></input>
              <div className={styles.buttongroup}>
                <button className={styles.searchbutton}>
                  <div className={styles.searchbuttontext}>検索</div>
                </button>

                <button className={styles.resetbutton}>
                  <div className={styles.resetbuttontext}>リセット</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.frame}></div>
      </div>
    </>
  );
}
