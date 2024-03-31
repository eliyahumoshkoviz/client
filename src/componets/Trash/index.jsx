import React from "react";
import style from "./style.module.css";

import { IoTrashOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Trash() {
  return (

    <div className={style.main}>
      <IoTrashOutline className={style.icon} />
      <HiOutlineDotsVertical />
    </div>
  );
}
