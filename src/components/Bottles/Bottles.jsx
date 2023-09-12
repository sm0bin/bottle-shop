import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    console.log("clicked", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  const handleRemoveFromCart = (bottle) => {
    console.log("remove", bottle);
    const restCart = cart.filter((item) => item !== bottle);
    setCart(restCart);
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
