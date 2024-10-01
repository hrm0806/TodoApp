import Link from "next/link";

import TodoIcon from "../atoms/Icon/TodoIcon";
import classes from "./SideBar.module.scss";
import { ProfileIcon } from "../atoms/Icon/profileIcon";

export const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.divider}></div>
      <button className={classes.ListItem}>
        <div className={classes.Frame}>
          <TodoIcon />
        </div>
        <div className={classes.ListItemText}>
          <div className={classes.Name}>TODO</div>
        </div>
      </button>

      <Link href="/profile">
        <button className={classes.ListItem}>
          <div className={classes.Frame}>
            <ProfileIcon />
          </div>

          <div className={classes.ListItemText}>
            <div className={classes.Name}>プロフィール</div>
          </div>
        </button>
      </Link>

      <div className={classes.ListItemNew}>
        <Link href="/newtask">
          <button className={classes.NewButton}>
            <div className={classes.NewButtonText}>新規追加</div>
          </button>
        </Link>
      </div>
    </div>
  );
};
