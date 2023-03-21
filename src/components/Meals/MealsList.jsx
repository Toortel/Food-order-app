import React, { useEffect, useState } from "react";

import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import MealsSummary from "./MealsSummary";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState({
    message: "",
    hasError: false,
  });

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://http-requests-68c70-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        );
        if (!response.ok) {
          throw new Error("Could not fetch necessary data, try again later!");
        }
        const data = await response.json();

        const fetchedMeals = [];

        for (const key in data) {
          fetchedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        if (fetchedMeals.length > 0) {
          setIsLoading(false);
        }
        setMeals(fetchedMeals);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorState({ message: error.message, hasError: true });
      }
    };

    fetchMeals();
  }, []);

  return (
    <React.Fragment>
      <MealsSummary />
      <section className={classes.meals}>
        {!isLoading && !errorState.hasError && (
          <ul>
            {meals.map((meal) => {
              return (
                <MealItem
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  id={meal.id}
                  key={meal.id}
                />
              );
            })}
          </ul>
        )}
        {isLoading && <p className={classes.message}>Loading...</p>}
        {!isLoading && errorState.hasError && (
          <p className={classes.message}>{errorState.message}</p>
        )}
      </section>
    </React.Fragment>
  );
};

export default MealsList;
