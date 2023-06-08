import  React, { useReducer } from "react";
import MealsContext from "./meals-context";

const defaultState = {
    items: [],
    totalPrice: 0
}

const mealsReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items];
        const index = updatedItems.findIndex(item => item.id === action.item.id);
        if (index === -1) {
            updatedItems.push(action.item);
        }
        else {
            updatedItems[index].count = updatedItems[index].count + action.item.count;
        }
        const updatedTotalPrice = state.totalPrice + (action.item.count * action.item.price);
        return { items: updatedItems, totalPrice: updatedTotalPrice }
    }
    return defaultState;
}
const MealsProvider = props => {
    const [mealsState, dispatchMealsAction] = useReducer(mealsReducer, defaultState);
    const addItemToCartHandler = item => {
        dispatchMealsAction({ type: 'ADD', item: item })
    };

    const mealsContext = {
        items: mealsState.items,
        totalPrice: mealsState.totalPrice,
        addItem: addItemToCartHandler,
    }
    props.OnItemsUpdated({items: mealsState.items,
        totalPrice: mealsState.totalPrice});
    return <MealsContext.Provider value={mealsContext}>
        {props.children}
    </MealsContext.Provider>

};

export default MealsProvider;