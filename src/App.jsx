import React from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsList />
        <Cart />
      </main>
    </React.Fragment>
  );
}

export default App;
