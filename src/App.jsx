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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      amount: updatedTotalAmount,
    };
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
