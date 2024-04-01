import React, { useState } from "react";
import Badge from "./componets/Badge";
import Send from "./componets/Send";
import Trash from "./componets/Trash";
import EmailLi from "./componets/EmailLi/insex";
import NewMsgBtn from "./componets/NewMsgBtn";
import InputSearch from "./componets/InputSearch";
import LabelBadge from "./componets/LabelBadge";
import EmailTitle from "./componets/EmailTitle";
import Popup from "./componets/PopUp";
import DataContext from "./context/DataContext";


export default function App() {
  const [count, setCount] = useState(45);
  const [dataContext, setDataContext] = useState(<EmailLi count={count} />);




  return (
    <DataContext.Provider value={{dataContext, setDataContext}}>
      <div
        style={{
          backgroundColor: "rgb(243 243 251)",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EmailLi count={count} />
        {/* <Send></Send> */}
        {/* <Trash/> */}
        {/* <InputSearch/> */}
        {/* <NewMsgBtn/> */}
        {/* <LabelBadge/> */}
        {/* <EmailTitle/> */}
        <Popup/>
      </div>
    </DataContext.Provider>
  );
}
