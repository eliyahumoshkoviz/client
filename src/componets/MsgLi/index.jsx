import { useState } from 'react';
import style from './style.module.css'
import { BiSolidShare } from "react-icons/bi";

//המשתמש שנכנס אמור לקבל את זה מהגלובל
let user = { _id: "6617bd20bc41e1762883a8e5", email: "eli@gmail.com" };

export default function MsgLi({ msg}) {

  const [expand, setExpand] = useState(false);
  const { from, content } = msg
  const isRecive = from._id !== user._id;

  const messageDate = new Date(msg.date);
  const dateString = messageDate.toLocaleDateString();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return (
    <>
      <div onClick={() => setExpand(prev => !prev)} className={`${style.container} ${expand ? style.expandedContainer : ''}`}>
        <div className={style.headerContainer}>
          {isRecive ? (<>
            <img className={style.img} src='data:image/jpeg;base64,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' alt="" />
            <div className={style.content} >
              <h3>{from.fullName}</h3>
            </div></>) : <><BiSolidShare className={style.svg} /> <h3>you</h3></>}

          <p className={style.text}> {!expand && (content)} </p>
          <p>{dateString}</p>
          <p>{timeString}</p>
        </div>
        <p className={style.textExpand}> {expand && (content)} </p>
      </div>
    </>
  )
}