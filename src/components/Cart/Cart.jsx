import React, { useContext, useState } from "react";
import CartContext from "../../context/ cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://http-requests-68c70-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            order: ctx.items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Submitting data failed, try again later!");
      }

      setIsSubmitting(false);
      setDidSubmit(true);
      ctx.items.length = 0;
    } catch (error) {
      console.log(error);
    }
  };

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{"$" + ctx.totalAmount.toFixed(2)}</span>
      </div>
      {showForm && (
        <Checkout hideForm={hideOrderHandler} onCheckout={submitOrderHandler} />
      )}
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
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending your order data...</p>;
  const didSubmitModalContent = <p>Succesfully sent the order!</p>;

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
