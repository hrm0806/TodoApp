import { TitleContainer } from "@/components/molecules/TitleContainer";
import styles from "./pageHome.module.scss";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import { getAllTasks } from "@/TaskAPI";
import { TaskCard } from "@/components/molecules/TaskCard";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <>
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
        <div className={styles.space}></div>
        <div className={styles.TaskListFrame}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
