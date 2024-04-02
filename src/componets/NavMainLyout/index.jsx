import React from "react";
import { Outlet } from "react-router-dom";
import NavMain from "../NavMain";
import style from "./style.module.css";

export default function NavMainLyout() {
  return (
    <main className={style.main}>
      <NavMain />
      <Outlet />
    </main>
  );
}
