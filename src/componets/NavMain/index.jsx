import React from "react";
import style from "./style.module.css";
import {
  IoMdVideocam,
  IoIosTimer,
  IoMdPeople,
  IoIosStats,
} from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  const iconsData = [
    { icon: IoIosTimer, title: "Timer", to: 'timer' },
    { icon: MdOutlineTask, title: "Task" },
    { icon: FaRegEye, title: "Watch" },
    { icon: IoMdPeople, title: "emails" },
    { icon: IoIosStats, title: "Stats" },
    { icon: IoMdVideocam, title: "Videocam" },
  ];

  return (
    <>
    <div className={style.container}>
      <img src="./vite.svg" alt="img" />
      <ul className={style.ul}>
        {iconsData.map((obj) => (
          <div className={style.border} key={obj.title}>
            <NavLink
              to={`/${obj.title.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? style.active : ""
              }
            >
              <li className={style.li} title={obj.title}>
                <obj.icon className={style.icon} />
              </li>
            </NavLink>
          </div>
        ))}
      </ul>
      <img src="./vite.svg" alt="img" />
    </div>
    </>
  );
}
