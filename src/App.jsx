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

  const addItemToCartHandler = (item) => {
    
  };

  const removeItemFromCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        isVisible: isVisible,
        onClose: closeCartHandler,
        onShow: showCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        totalAmount: 0,
        items: [],
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
