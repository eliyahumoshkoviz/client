import { useState } from 'react';
import style from './style.module.css'
import { BiSolidShare } from "react-icons/bi";


export default function MsgLi ({ msg, user }) {
  const [expand, setExpand] = useState(true);
  const { mail } = user
  const { from, content } = msg
  const isRecive = from == mail


  return (
    <>
      <div onClick={() => setExpand(prev => !prev)} className={`${style.container} ${expand ? style.expandedContainer : ''}`}>
        <div className={ style.headerContainer}>
          {isRecive ? (<>
            <div className={style.img}><img src="./vite.svg" alt="" /></div>
            <div className={style.content} >
              <h3>Jessica Koel</h3>
            </div></>) : <><BiSolidShare className={style.svg} /> <h3>you</h3></>}

          <p className={style.text}> {!expand && (content)} </p>
          <p>27/11/2023</p>
          <p>11:34</p>
        </div>

      <p className={style.textExpand}> {expand && (content)} </p>
      </div>
    </>

  )
}