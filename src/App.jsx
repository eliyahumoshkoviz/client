import React, { useState } from "react";
import Badge from "./componets/Badge";
import Send from "./componets/Send";
import Trash from "./componets/Trash";
import EmailLi from "./componets/EmailLi/insex";
import NewMsgBtn from "./componets/NewMsgBtn";
import InputSearch from "./componets/InputSearch";

export default function App() {
  return (
    <div style={{ backgroundColor: 'rgb(rgb(243 243 251))', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <EmailLi /> */}
      {/* <Send></Send>
        <Trash/> */}
        <InputSearch/>
    </div>
  );
}
