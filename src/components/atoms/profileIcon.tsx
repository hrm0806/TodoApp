import classes from "./profileIcon.module.scss";
import React from "react";

export const ProfileIcon = () => {
  return (
    <div className={classes.Icon}>
      <div className={classes.Circle}></div>
      <div className={classes.smallCircle}></div>
      <div className={classes.body}></div>
      <div className={classes.smallbody}></div>
    </div>
  );
};
