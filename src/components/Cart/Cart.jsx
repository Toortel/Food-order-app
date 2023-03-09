import React, { useContext } from "react";
import CartContext from "../../context/ cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>item.name</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.32</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
