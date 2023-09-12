import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/Bottles/Bottles";
import Cart from "./components/Cart/Cart";

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
