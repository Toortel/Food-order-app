import React, { useReducer, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
import CartContext from "./context/ cart-context";

const defautCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
  }
  return defautCartState;
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defautCartState
  );

  const showCartHandler = () => {
    setIsVisible(true);
  };

  const closeCartHandler = () => {
    setIsVisible(false);
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        isVisible: isVisible,
        onClose: closeCartHandler,
        onShow: showCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        totalAmount: cartState.totalAmount,
        items: cartState.items,
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
