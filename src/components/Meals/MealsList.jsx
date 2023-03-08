import React from "react";

import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import MealsSummary from "./MealsSummary";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                name={meal.name}
                description={meal.description}
                price={meal.price}
                key={meal.id}
              />
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default MealsList;
