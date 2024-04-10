import { useEffect, useState } from "react";
import Badge from "../Badge";
import Star from "../Star";
import style from "./style.module.css";

export default function EmailLi({ chat = {},activeChat, setActiveChat }) {
  const chatInner = chat.chat || {};
  const { _id, subject, lastDate, sendersDetails } = chatInner;

  const handleClick = () => {
    setActiveChat(_id);
  };

  useEffect(()=>{
    setActiveChat(null);

  },[])

  return (
    <div
      className={`${style.main} ${activeChat===_id && style.emailLiActive}`}
      onClick={handleClick}
    >
      <img className={style.img} src="/img/images.jpg" alt="" />
      <div className={style.content}>
        <h3 className={style.title}>{sendersDetails}</h3>
        <p className={style.text}>{subject}</p>
      </div>
      <div className={style.info}>
        <span className={style.date}>{lastDate.split('T')[1].split('.')[0].slice(0, -3)}</span>
        {chat.isRead ? <Star /> : <Badge>1</Badge>}
      </div>
    </div>
  );
}

