import React from "react";
import { Route, Routes } from "react-router-dom";
import NavMessage from "../NavMessage";
import NavMessageLyout from "../NavMessageLyout";
import NavMainLyout from "../NavMainLyout";

export default function Layout() {
  return (
    <Routes>
      <Route path="settings" element={<NavMainLyout />} />
      <Route element={<NavMainLyout />}>
        <Route path="timer" element={<h1>timer</h1>} />
        <Route path="task" element={<h1>task</h1>} />
        <Route path="watch" element={<h1>watch</h1>} />
        <Route path="emails" element={<NavMessageLyout />} >
          
        </Route>
      </Route>





      <Route element={<NavMainLyout />}>
        <Route path="stats" element={<h1>stats</h1>} />
      </Route>
      <Route element={<NavMainLyout />}>
        <Route path="videocam" element={<h1>videocom</h1>} />
      </Route>
    </Routes>
  );
}
