import React from "react";
import Badge from "../Badge";
import style from "./style.module.css";

export default function EmailLi() {
  return (
    <div className={style.main}>
      <img className={style.img} src="./vite.svg" alt="" />
      <div className={style.content}>
        <h3 className={style.title}>Jessica Koel</h3>
        <p className={style.text}>Hey Jontray, do you remember...</p>
      </div>
      <div className={style.info}>
        <date className={style.date}>11:30</date>
        <Badge>12</Badge>
      </div>
    </div>
  );
}
