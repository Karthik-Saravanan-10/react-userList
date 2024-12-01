import './alert.css'

function Removealert({ setalertBtn, redirectClicked }) {
  function viewClicked() {
    setalertBtn(true);
    redirectClicked();
    console.log("Removed Successfully");
  }
  function offClicked() {
    setalertBtn(false);
    console.log("not intrested to remove");
  }
  return (
    <>
      <div className="alert">
        <p>Are you sure delete the card?</p>
        <button onClick={viewClicked}>Yes</button>
        <button onClick={offClicked}>No</button>
      </div>
    </>
  );
}

export default Removealert;
