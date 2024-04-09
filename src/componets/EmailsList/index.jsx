import React from "react";
import InputSearch from "../InputSearch";
import EmailLi from "../EmailLi";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function index() {
  const [dataMail, setDataMail] = useState([]);

  let { emailType } = useParams();

  useEffect(() => {
    setDataMail([]);
    getChats();
  }, [emailType]);

  const getChats = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5050/user/${emailType}`
      );
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