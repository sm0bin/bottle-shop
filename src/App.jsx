import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/Bottles/Bottles";
import { setLS, getLS } from "./utilities/localStorage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <h1>Our Bottles</h1>
      <Bottles />
    </>
  );
}

export default App;
