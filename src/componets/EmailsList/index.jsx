import React from "react";
import InputSearch from "../InputSearch";
import EmailLi from "../EmailLi";
import style from "./style.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosReq } from "../../fonction/axiosReq";

export default function index() {
  const [dataMail, setDataMail] = useState([]);
  const [activeChat, setActiveChat] = useState("");

  let { emailType } = useParams();

  useEffect(() => {
    setDataMail([]);
    getChats();
  }, [emailType]);

  const getChats = async () => {
    try {
      const data = await axiosReq({ url: `user/${emailType}` })
      setDataMail(data.chats);
    } catch (error) {
      console.error("Error fetching data: ", error?.response);
    }
  };

  return (
    <div className={style.container}>
      <InputSearch />
      {dataMail.map((chat, index) => (
        <NavLink
          key={index}
          to={`${chat.chat._id}`}
          className={({ isActive }) => (isActive ? style.active : "")}>
          <EmailLi chat={chat} activeChat={activeChat} setActiveChat={setActiveChat} />
        </NavLink>
      ))}
    </div>
  );
}


