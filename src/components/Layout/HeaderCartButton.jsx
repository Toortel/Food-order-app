import React, { useContext } from "react";
import CartContext from "../../context/ cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const numberOfItems = ctx.items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={ctx.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
