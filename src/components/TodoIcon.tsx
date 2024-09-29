import classes from "./TodoIcon.module.scss";

const TodoIcon = () => {
  return (
    <div className={classes.Icon}>
      <div className={classes.vector}>
        <p className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </p>
        <p className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </p>
        <p className={classes.Line}>
          <div className={classes.circle}></div>
          <div className={classes.line}></div>
        </p>
      </div>
    </div>
  );
};

export default TodoIcon;
