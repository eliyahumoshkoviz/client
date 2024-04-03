import React from "react";
import { Outlet } from "react-router-dom";
import EmailPage  from "../EmailPage";

export default function EmailsListLyout() {
  return (
    <>
      <EmailPage />
      <Outlet />
    </>
  );
}
