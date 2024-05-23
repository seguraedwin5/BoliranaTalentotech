import Layout from "./layout/Layout";
import { SesionDataContext } from "../Context";
import "./App.css";
import { useState } from "react";

function App() {
  const [sesiondata, setSessionData] = useState({});
  return (
    <SesionDataContext.Provider value={[sesiondata, setSessionData]}>
      <Layout></Layout>
    </SesionDataContext.Provider>
  );
}

export default App;
