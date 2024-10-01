import HeaderIconButton from "../atoms/headerIconButton";
import classes from "./Appbar.module.scss";

const AppBar = () => {
  return (
    <header className={classes.AppBar}>
      <div className={classes.LeftSide}>
        <HeaderIconButton />
        <div className={classes.Typography}>
          <div className={classes.Title}>
            <div className={classes.Text}>タスク管理アプリ</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
