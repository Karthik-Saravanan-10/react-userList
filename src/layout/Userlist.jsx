import { useState } from "react";

import Dataview from "../pages/Dataview";
import classes from "./Back.module.css";
import arrayElement from "../array";

function Userlist() {
  let [clickData, setClick] = useState(false);
  //console.log(clickData);
  let notify;
  //console.log("hii", Boolean(arrayElement.length));
  if (!arrayElement.length) {
    notify = (
      <>
        <h2>None Users</h2>
        <p>Not Yet Added</p>
      </>
    );
  } else {
    notify = (
      <main className={classes.dataView}>
        {arrayElement.map((elem) => {
          return <Dataview section={elem} key={elem.id} setClick={setClick} />;
        })}
      </main>
    );
  }
  return (
    <>
      <h1>User List</h1>
      {(!clickData || clickData) && notify}
    </>
  );
}

export default Userlist;
