import { TitleContainer } from "@/components/molecules/TitleContainer";
import styles from "./pageHome.module.scss";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import { TaskCardList } from "@/components/molecules/TaskCardList";

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/count/`, { cache: "no-store" });
  console.log(res);
  if (!res.ok) {
    console.error(`Failed to fetch data: ${res.status}`);
    return;
  }
  const count = await res.json();

  console.log("Task count:", count.count);

  return (
    <div className={styles.BOX}>
      <TitleContainer title="TODO一覧" />
      <div className={styles.search}>
        <div className={styles.searchtext}>検索</div>
        <div className={styles.searchbox}>
          <div className={styles.searchboxin}>
            <input className={styles.searchinputtext}></input>
            <div className={styles.buttongroup}>
              <BlueButton9036 buttonname="検索" />
              <DarkButton9036 buttonname="リセット" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Count}>
        <div className={styles.CountText}>合計{count.count}件</div>
      </div>

      <TaskCardList />
    </div>
  );
}
