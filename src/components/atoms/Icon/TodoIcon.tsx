import classes from "./TodoIcon.module.scss";

const TodoIcon = () => {
  return (
    <div className={classes.Icon}>
      <div className={classes.vector}>
        <div className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </div>
      </div>
    </div>
  );
};

export default TodoIcon;
