"use client";
import { TitleContainer } from "@/components/molecules/TitleContainer";
import styles from "./pageHome.module.scss";
import BlueButton9036 from "@/components/atoms/button/BlueButton90*36";
import DarkButton9036 from "@/components/atoms/button/DarkButton9036";
import { SelectBox } from "@/components/molecules/SelectBox";
import { useState } from "react";
import { Filter } from "@/types";
import { TaskCardList } from "@/components/molecules/TaskCardList";

export default function Home() {
  const [filter, setFilter] = useState<Filter>("all"); //all, checked, unchecked
  const handleFilter = (filter: Filter) => {
    setFilter(filter);
    console.log(filter);
  };

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
      <SelectBox handleFilter={handleFilter} />
      <TaskCardList />
    </div>
  );
}
