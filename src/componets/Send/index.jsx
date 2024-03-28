import React from "react";
import style from "./style.module.css";
import { IoIosSend } from "react-icons/io";


export default function Send() {
  return (
    <div className={style.send}>
      <span >Send</span>
      <IoIosSend />
      
    </div>
  );
}
