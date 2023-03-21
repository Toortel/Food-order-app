import React, { useContext, useState } from "react";
import CartContext from "../../context/ cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const [showForm, setShowForm] = useState(false);

  const ctx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hideOrderHandler = () => {
    setShowForm(false);
  };

  const orderHandler = () => {
    setShowForm(true);
  };

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{"$" + ctx.totalAmount.toFixed(2)}</span>
      </div>
      {showForm && <Checkout hideForm={hideOrderHandler} />}
      {!showForm && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={ctx.onClose}>
            Close
          </button>
          {ctx.items.length > 0 && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
