import React, { useEffect, useState } from "react";

import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import MealsSummary from "./MealsSummary";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://http-requests-68c70-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();
      console.log(data);
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
    };
    fetchMeals();
  }, []);

  return (
    <React.Fragment>
      <MealsSummary />
      <section className={classes.meals}>
        {!isLoading ? <ul>
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
        </ul> : <p className={classes["loading-message"]}>Loading...</p>}
        
      </section>
    </React.Fragment>
  );
};

export default MealsList;
