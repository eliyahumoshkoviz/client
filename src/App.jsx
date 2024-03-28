import React from "react";
import Badge from "./componets/Badge";
import Send from "./componets/Send";
import Trash from "./componets/Trash";

export default function App() {
  return (
    <div>
      {/* <div style={{ display: "flex" }}>
        <img src="./vite.svg" alt="" />
        <div>
          <h3>Eli mosh</h3>
          <p>hey Eli ...</p>
        </div>
        <div>
          <p>11:30</p>
          <Badge>12</Badge>
        </div>
      </div> */}
      <Send></Send>
      <Trash/>
    </div>
  );
}
