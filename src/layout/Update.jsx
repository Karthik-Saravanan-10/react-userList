import { useContext, useState } from "react";

import DataCtx from "../store/store";
import Formview from "../pages/Formview";

function Update() {
  //let [update, setupdate] = useState(false);
  let updateCtx = useContext(DataCtx);
  let updateData = updateCtx.data;
  //console.log(!updateData);

  return (
    <>
      {/* {updateData.map((elem) => {
        return (
          <Formview
            inputName={elem.inputName}
            inputJob={elem.inputJob}
            inputOffice={elem.inputOffice}
            inputContact={elem.inputContact}
          />
        );
        //console.log(elem)
      })} */}

      <Formview
        inputName={updateData[0].inputName}
        inputJob={updateData[0].inputJob}
        inputOffice={updateData[0].inputOffice}
        inputContact={updateData[0].inputContact}
      />
    </>
  );
}

export default Update;
