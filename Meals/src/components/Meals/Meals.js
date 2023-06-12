import React from "react";
import { Provider } from "react-redux";
import store from "../../redux-store/store";
import AvailableMeals from "./AvailableMeals";


const Meals = (props) => {
    const cartUpdated = (itemsDetails) =>{
        props.ReceiveItems(itemsDetails);
    }
    return (
        <Provider store={store}>
            <AvailableMeals OnItemsUpdated = {cartUpdated}></AvailableMeals>
        </Provider>
    );
}
export default Meals;