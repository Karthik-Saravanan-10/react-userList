import * as React from "react";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import arrayElement from "../array";
import style from "./Home.module.css";
import DataCtx from "../store/store";
import Removealert from "./Removealert";

function Dataview({ section, setClick }) {
  let navigate = useNavigate();
  const dataCtx = useContext(DataCtx);
  const [alertBtn, setalertBtn] = useState(false);

  function removeHandler() {
    if (!alertBtn) {
      setalertBtn(true);
    }
  }

  function redirectClicked() {
    if (alertBtn) {
      let indexValue = arrayElement.indexOf(section);
      arrayElement.splice(indexValue, 1);
      setClick((prev) => !prev);
      //navigate("/form");
    }
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
      <div>
        {alertBtn ? (
          <main className={style.removeAlert}>
            <Removealert
              setalertBtn={setalertBtn}
              redirectClicked={redirectClicked}
            />
          </main>
        ) : (
          console.log("not Shown remove Box")
        )}
      </div>
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
