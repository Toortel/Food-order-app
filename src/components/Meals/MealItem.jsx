import React, { useContext } from "react";
import CartContext from "../../context/ cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(amount);
  };

  return (
    <li className={classes["meal-item"]}>
      <div>
        <h2 className={classes["meal-item-title"]}>{props.name}</h2>
        <p className={classes["meal-item-description"]}>{props.description}</p>
        <p className={classes["meal-item-price"]}>
          {"$" + props.price.toFixed(2)}
        </p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
