import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";
import { getLS, setLS } from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    // console.log(bottles);
    // const cartFromLS = getLS();
    // setCart()
    const idsOfLS = bottles.length && getLS();
    if (idsOfLS) {
      console.log(idsOfLS);
      const cartOfLS = [];
      for (const id of idsOfLS) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          cartOfLS.push(bottle);
        }
      }
      console.log(cartOfLS);
      setCart(cartOfLS);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    console.log("clicked", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    setLS(newCart);
  };

  const handleRemoveFromCart = (bottle) => {
    console.log("remove", bottle);
    const restCart = cart.filter((item) => item !== bottle);
    setCart(restCart);
    setLS(restCart);
  };

  return (
    <>
      <h1>Number of Bottles: {bottles.length}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 500px",
          gap: "20px",
        }}
      >
        <div className="cards">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </>
  );
};

export default Bottles;
