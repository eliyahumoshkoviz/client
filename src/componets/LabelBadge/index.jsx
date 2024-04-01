import React from "react";
import style from "./style.module.css";

export default function LabelBadge({ color, label }) {
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: color }} className={style.main}>
        <div style={{ backgroundColor: color }} className={style.inner}></div>
      </div>
      <div> {label}</div>
    </div>
  );
}
  