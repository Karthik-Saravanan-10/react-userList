import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import arrayElement from "../array";
import style from "./Home.module.css";
import DataCtx from "../store/store";

function Dataview({ section, setClick }) {
  let navigate = useNavigate();
  const dataCtx = useContext(DataCtx);

  function removeHandler() {
    let indexValue = arrayElement.indexOf(section);
    arrayElement.splice(indexValue, 1);
    setClick((prev) => !prev);
    //navigate("/form");
  }

  function editHandler() {
    dataCtx.addHandler(section);
    let indexValue = arrayElement.indexOf(section);
    arrayElement.splice(indexValue, 1);
    //console.log(dataCtx.data);
    navigate("/update");
  }

  return (
    <>
      <div className={style.card} key={section.id}>
        <div className={style.cardMain}>
          <h2>{section.inputName}</h2>
          <p>{section.inputJob}</p>
          <p>{section.inputOffice}</p>
          <p>{section.inputContact}</p>
        </div>
        <div className={style.crudBtn}>
          <button className={style.deleteBtn} onClick={editHandler}>
            Edit
          </button>
          <button className={style.deleteBtn} onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default Dataview;
