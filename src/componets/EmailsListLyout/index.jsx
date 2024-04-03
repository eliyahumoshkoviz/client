import React from "react";
import { Outlet } from "react-router-dom";
import EmailsList from "../EmailsList";

export default function EmailsListLyout() {
  return (
    <>
      <EmailsList />
      <Outlet />
    </>
  );
}
