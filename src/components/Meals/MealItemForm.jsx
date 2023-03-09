import React, { useContext } from "react";
import CartContext from "../../context/ cart-context";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={ctx.addItem}>Add</button>
    </form>
  );
};

export default MealItemForm;
