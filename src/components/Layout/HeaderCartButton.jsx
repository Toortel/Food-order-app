import React, { useContext } from "react";
import CartContext from "../../context/ cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={ctx.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
