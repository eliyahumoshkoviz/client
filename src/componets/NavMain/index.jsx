import React from "react";
import style from "./style.module.css";
import { IoMdVideocam, IoIosTimer, IoMdPeople, IoIosStats } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";

export default function NavMain() {
  const iconsData = [
    { icon: IoIosTimer, title: 'Timer' },
    { icon: MdOutlineTask, title: 'Task' },
    { icon: FaRegEye, title: 'Watch' },
    { icon: IoMdPeople, title: 'Messages' },
    { icon: IoIosStats, title: 'Stats' },
    { icon: IoMdVideocam, title: 'Videocam' }
  ];

  return (
    <div className={style.container}>
      <img src="./vite.svg" alt="img" />
      <ul>
        {iconsData.map((obj, index) => (
          <li key={index} title={obj.title}>
            <a href="#" className={style.icon}>
              <obj.icon />
            </a>
          </li>
        ))}
      </ul>
      <img src="./vite.svg" alt="img" />
    </div>
  );
}
