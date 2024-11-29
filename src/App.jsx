import { Outlet } from "react-router-dom";
import { Store } from "./store/store";

import Head from "./layout/Head";

function App() {
  return (
    <>
      <Store>
        <Head />
        <main>
          <Outlet />
        </main>
      </Store>
    </>
  );
}

export default App;
