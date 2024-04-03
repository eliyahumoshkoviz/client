import React from "react";
import { Route, Routes } from "react-router-dom";
import NavMessageLyout from "../NavMessageLyout";
import NavMainLyout from "../NavMainLyout";
import EmailsListLyout from "../EmailsListLyout";
import EmailPageLyout from "../EmailPageLyout";

export default function Layout() {
  return (
    <Routes>
      <Route path="settings" element={<NavMainLyout />} />
      <Route element={<NavMainLyout />}>
        <Route path="timer" element={<h1>timer</h1>} />
        <Route path="task" element={<h1>task</h1>} />
        <Route path="watch" element={<h1>watch</h1>} />
        <Route path="videocam" element={<h1>videocom</h1>} />
        <Route path="emails" element={<NavMessageLyout />} >
          <Route path=":emailType" element={<EmailsListLyout />} >
            <Route path=":emailId" element={<EmailPageLyout/>} />
          </Route>

        </Route>

      </Route>
    </Routes>
  );
}
