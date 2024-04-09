import { useState } from "react";
import Badge from "../Badge";
import Star from "../Star";
import style from "./style.module.css";

export default function EmailLi({ chat = {} }) {
  const chatInner = chat.chat || {};
  const { _id, subject, lastDate, sendersDetails } = chatInner;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${style.main} ${isActive && style.emailLiActive}`}
      onClick={handleClick}
    >
      <img className={style.img} src="/img/images.jpg" alt="" />
      <div className={style.content}>
        <h3 className={style.title}>{sendersDetails}</h3>
        <p className={style.text}>{subject}</p>
      </div>
      <div className={style.info}>
        <span className={style.date}>{lastDate.split('T')[1].split('.')[0].slice(0, -3)}</span>
        {chat.isRead? <Star /> : <Badge>1</Badge>}
      </div>
    </div>
  );
}
