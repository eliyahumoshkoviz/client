import React from "react";
import style from "./style.module.css";

import LabelBadge from "../LabelBadge";
import NewMsgBtn from "../NewMsgBtn";

import { FaStar } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { MdDelete, MdKeyboardArrowLeft } from "react-icons/md";
import { Outlet } from "react-router-dom";

export default function NavMessage() {
  const typeData = [
    { icon: CiInboxIn, type: "Inbox" },
    { icon: LuSend, type: "Sent Emails" },
    { icon: FaStar, type: "favorie" },
    { icon: FaPen, type: "Draft" },
    { icon: MdDelete, type: "Deleted" },
    { icon: RiArrowDownSLine, type: "more" },
  ];
  const badgeData = [
    { color: "red", label: "Label 1" },
    { color: "green", label: "Label 2" },
    { color: "blue", label: "Label 3" },
    { color: "purple", label: "Label 4" },
  ];
  return (
    <>
      <Outlet />

      <div className={style.container}>
        <div className={style.title}>
          <MdKeyboardArrowLeft className={style.iconTitle} />{" "}
          <h1 className={style.Textitle}> MailBox</h1>
        </div>
        <NewMsgBtn />
        <ul className={style.ul}>
          {typeData.map((obj, index) => (
            <li className={style.typesEmail} key={index}>
              <obj.icon className={style.icon} />
              {obj.type}
            </li>
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
