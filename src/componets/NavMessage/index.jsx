import React, { useEffect } from "react";
import style from "./style.module.css";

import LabelBadge from "../LabelBadge";
import NewMsgBtn from "../NewMsgBtn";

import { FaStar } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { MdDelete, MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavMessage() {
  const typeData = [
    { icon: CiInboxIn, type: "Inbox", to: "inbox" },
    { icon: LuSend, type: "Sent Emails", to: "sent" },
    { icon: FaStar, type: "favorie", to: "favorite" },
    { icon: FaPen, type: "Draft", to: "draft" },
    { icon: MdDelete, type: "Deleted", to: "deleted" },
    { icon: RiArrowDownSLine, type: "more", to: "more" },
  ];
  const badgeData = [
    { color: "red", label: "Label 1" },
    { color: "green", label: "Label 2" },
    { color: "blue", label: "Label 3" },
    { color: "purple", label: "Label 4" },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <MdKeyboardArrowLeft className={style.iconTitle} />{" "}
          <h1 className={style.Textitle}>MailBox</h1>
        </div>
        <NewMsgBtn />
        <ul className={style.ul}>
          {typeData.map((obj, index) => (
            <NavLink
              key={index}
              to={`${obj.to}`}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              <li className={style.typesEmail} title={obj.type}>
                <obj.icon className={style.icon} />
                {obj.type}
              </li>
            </NavLink>

            // < li className={style.typesEmail} key={index} >
            //   <obj.icon className={style.icon} />
            //   {obj.type}
            // </li>
          ))}
        </ul>

        {/* <div>
            {badgeData.map((badge, index) => (
                <LabelBadge key={index} color={badge.color} label={badge.label} />
            ))}
            </div> */}
      </div>
    </>
  );
}
