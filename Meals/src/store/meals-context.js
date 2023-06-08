import React from "react";

const MealsContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => {},
});

export default MealsContext;