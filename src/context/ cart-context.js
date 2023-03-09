import React from "react";

const CartContext = React.createContext({
  cartVisibility: false,
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
