import { ProfileIcon } from "../atoms/profileIcon";
import TodoIcon from "../atoms/TodoIcon";
import classes from "./SideBar.module.scss";

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
      <button className={classes.ListItem}>
        <div className={classes.Frame}>
          <ProfileIcon />
        </div>

        <div className={classes.ListItemText}>
          <div className={classes.Name}>プロフィール</div>
        </div>
      </button>
    </div>
  );
};
