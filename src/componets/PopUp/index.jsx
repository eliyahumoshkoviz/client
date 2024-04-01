import { useContext } from "react";
import style from "./style.module.css";
import DataContext from "../../context/DataContext";
import Send from "../Send";

function Popup() {
  const { dataContext, setDataContext } = useContext(DataContext);
  const closeModal = () => {
    setDataContext(null);
  };

  return (
    <>
    {dataContext && (
      <div className={style.container} onClick={closeModal}>
        <div
          className={style.popup}
          onClick={(event) => event.stopPropagation()}
        >
          {dataContext}
        </div>
      </div>
    )}
    <button onClick={() => setDataContext(<Send />)}>enter component</button>
  </>
  );
}

export default Popup;
