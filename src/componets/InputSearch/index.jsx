import React from 'react'
import style from './style.module.css'
import { IoIosSearch } from "react-icons/io";


export default function InputSearch() {
  return (
    <div className={style.input}>
      <input type='text' className={style.input} placeholder='Search' />
      <IoIosSearch className={style.icon} />
    </div>

  )
}

