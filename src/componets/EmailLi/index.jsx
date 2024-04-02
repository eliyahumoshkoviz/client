import { useState } from "react";
import Badge from "../Badge";
import Star from "../Star";
import style from "./style.module.css";

export default function EmailLi({count ,email }) {
  const {subject}= email.email;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
    className={`${style.main} ${isActive && style.emailLiActive}`}

      onClick={handleClick}
      >
      <img className={style.img} src="./img/catering-kolkata.jpg" alt="" />
      <div className={style.content}>
        <h3 className={style.title}>Jessica Koel</h3>
        <p className={style.text}>{subject}</p>
      </div>
      <div className={style.info}>
        <span className={style.date}>11:30</span>
        {count === 0 ? <Star /> : <Badge>25</Badge>}

      </div>
    </div>
  );
}