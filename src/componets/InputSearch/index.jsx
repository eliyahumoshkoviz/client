import React, { useState } from "react";
import style from "./style.module.css";
import { IoIosSearch } from "react-icons/io";

export default function InputSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={style.input}>
      <input
        type="text"
        className={style.input}
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText.length === 0 && <IoIosSearch className={style.icon} />}
    </div>
  );
}
