import React from "react";

const CartStore = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartStore;