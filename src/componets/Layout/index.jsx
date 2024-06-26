import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavMessageLyout from "../NavMessageLyout";
import NavMainLyout from "../NavMainLyout";
import EmailsListLyout from "../EmailsListLyout";
import EmailPageLyout from "../EmailPageLyout";
import Login from "../../pages/Login";

export default function Layout() {
  const [user, setUser] = useState("a");
  if (user) {
    return (
      <Routes>
        <Route path="/" element={<NavMainLyout />} />
        <Route element={<NavMainLyout />}>
          <Route path="timer" element={<h1>timer</h1>} />
          <Route path="task" element={<h1>task</h1>} />
          <Route path="watch" element={<h1>watch</h1>} />
          <Route path="stats" element={<h1>stats</h1>} />
          <Route path="videocam" element={<h1>videocom</h1>} />
          <Route path="chats" element={<NavMessageLyout />}>
            <Route path=":chatType" element={<EmailsListLyout />}>
              <Route path=":chatId" element={<EmailPageLyout />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    );
  } else {
    return (
     <Login />
      
    );
  }
}
