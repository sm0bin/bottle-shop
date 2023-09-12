import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      {/* <h2>My Cart</h2>
      <h3>{cart.length}</h3> */}

      {cart.map((item) => (
        <div key={item.id} className="cartProducts">
          <img src={item.img} alt="" />

          <div>
            <h2>Steel Metal Bottle 1L</h2>
            <h3>Price: {item.price}</h3>
            <h3>Shipping: {item.shipping}</h3>
            <h3>Total Cost: {item.price + item.shipping}</h3>
            <div style={{ display: "flex" }}>
              <button
                className="btnSecondary"
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
              >
                Remove
              </button>
              <button className="btnPrimary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
