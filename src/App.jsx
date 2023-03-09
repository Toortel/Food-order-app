import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
import CartContext from "./context/ cart-context";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
  };

  const closeCartHandler = () => {
    setIsVisible(false);
  };

  

  return (
    <CartContext.Provider
      value={{
        isVisible: isVisible,
        onClose: closeCartHandler,
        onShow: showCartHandler,
      }}
    >
      <Header />
      <main>
        <MealsList />
        {isVisible && <Cart />}
      </main>
    </CartContext.Provider>
  );
}

export default App;
