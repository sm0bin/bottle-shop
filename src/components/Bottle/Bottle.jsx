import React from "react";
import "./Bottle.css";

function Bottle({ bottle, handleAddToCart }) {
  const { name, seller, img, price, stock, ratings } = bottle;

  return (
    <div className="card">
      <img src={img} style={{ width: "100%", borderRadius: "12px" }} alt="" />
      <h2>{name}</h2>
      <hr />
      <h3>Rating: {ratings}</h3>
      <h3>Stock: {stock}</h3>
      <h3>Brand: {seller}</h3>
      <h3>Price: ${price}</h3>
      <button onClick={() => handleAddToCart(bottle)}>Add to cart</button>
    </div>
  );
}

export default Bottle;
