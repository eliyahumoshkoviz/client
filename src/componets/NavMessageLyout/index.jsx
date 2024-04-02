import React from "react";
import { Outlet } from "react-router-dom";
import NavMessage from "../NavMessage";

export default function NavMessageLyout() {
  return (
    <>
      <NavMessage />
      <Outlet />
    </>
  );
}
