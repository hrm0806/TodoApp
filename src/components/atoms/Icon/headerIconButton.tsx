import classes from "./headerIconButton.module.scss";

const HeaderIconButton = () => {
  return (
    <button className={classes.IconButton}>
      <div className={classes.MenuFilled}>
        <div className={classes.vector}>
          <span className={classes.line}></span>
          <span className={classes.line2}></span>
          <span className={classes.line}></span>
        </div>
      </div>
    </button>
  );
};

export default HeaderIconButton;
