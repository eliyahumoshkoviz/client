import React from "react";
import style from "./style.module.css";

export default function EmailTitle( {subject, lastDate} ) {

  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <p className={style.date}>{lastDate}</p>
      <h3 className={style.title}> {subject}</h3>
    </div>
  );
}
