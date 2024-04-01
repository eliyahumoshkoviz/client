import React, { useState } from "react";
import style from "./style.module.css";

export default function Star() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <span
        className={isActive ? style.starActive : style.star}
        onClick={handleClick}
      >
        &#9733;
      </span>
    </div>
  );
}
