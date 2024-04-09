import React from "react";
import InputSearch from "../InputSearch";
import EmailLi from "../EmailLi";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosReq } from "../../fonction/axiosReq";

export default function index() {
  const [dataMail, setDataMail] = useState([]);

  let { emailType } = useParams();

  useEffect(() => {
    setDataMail([]);
    getChats();
  }, [emailType]);

  const getChats = async () => {
    try {
      const data = await axiosReq({url:`user/${emailType}`})
      setDataMail(data.chats);
    } catch (error) {
      console.error("Error fetching data: ", error?.response);
    }
  };

  return (
    <div className={style.container}>
      <InputSearch />
      {dataMail.map((chat, index) => (
        <EmailLi key={index} chat={chat} />
      ))}
    </div>
  );
}