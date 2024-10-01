import Link from "next/link";
import HeaderIconButton from "../atoms/Icon/headerIconButton";
import classes from "./Appbar.module.scss";

const AppBar = () => {
  return (
    <header className={classes.AppBar}>
      <div className={classes.LeftSide}>
        <HeaderIconButton />
        <div className={classes.Typography}>
          <div className={classes.Title}>
            <Link href="/">
              <div className={classes.Text}>タスク管理アプリ</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
