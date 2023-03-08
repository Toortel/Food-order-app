import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
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
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
