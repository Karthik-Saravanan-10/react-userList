import { useNavigate } from "react-router-dom";
import { useContext, useId, useState } from "react";

import style from "./Home.module.css";
import arrayElement from "../array";
import DataCtx from "../store/store";

function Formview(props) {
  let [getName, setgetName] = useState("");
  let [getJob, setgetJob] = useState("");
  let [getOffice, setgetOffice] = useState("");
  let [getContact, setgetContact] = useState("");
  const id = useId();
  const submitCtx = useContext(DataCtx);
  //console.log(arrayElement)
  //console.log(props.inputJob)

  let navigate = useNavigate();
  // let [updateHandler,setUpdate]=useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    let data = await {
      id: id,
      inputName: getName || props.inputName,
      inputJob: getJob || props.inputJob,
      inputOffice: getOffice || props.inputOffice,
      inputContact: getContact || props.inputContact,
    };
    await arrayElement.push(data);
    submitCtx.data.pop();
    console.log(submitCtx.data);
    navigate("/");
  }
  return (
    <>
      <h3>Add User Details</h3>
      <section>
        <form className={style.container} onSubmit={submitHandler}>
          <div className={style.field}>
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              name="inputName"
              id="inputName"
              defaultValue={props.inputName}
              onChange={(e) => setgetName(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <label htmlFor="inputJob">Profession</label>
            <input
              type="text"
              name="inputJob"
              id="inputJob"
              defaultValue={props.inputJob}
              onChange={(e) => setgetJob(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <label htmlFor="inputOffice">Office</label>
            <input
              type="text"
              name="inputOffice"
              id="inputOffice"
              defaultValue={props.inputOffice}
              onChange={(e) => setgetOffice(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <label htmlFor="inputContact">Contact</label>
            <input
              type="number"
              name="inputContact"
              id="inputContact"
              defaultValue={props.inputContact}
              onChange={(e) => setgetContact(e.target.value)}
              required
            />
          </div>
          <div className={style.divBtn}>
            <button className={style.formBtn}>
              {props.inputName ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Formview;

// function checkJob(proJob) {
//   if ((e) => setgetJob(e.target.value)) {
//     return (e) => setgetJob(e.target.value);
//   } else {
//     return proJob;
//   }
// }
// function checkOffice(proOffice) {
//   if ((e) => setgetOffice(e.target.value)) {
//     return (e) => setgetOffice(e.target.value);
//   } else {
//     return proOffice;
//   }
// }
// function checkContact(proContact) {
//   if ((e) => setgetContact(e.target.value)) {
//     return (e) => setgetContact(e.target.value);
//   } else {
//     return proContact;
//   }
// }
