import React from "react";
import MealsProvider from "../../store/MealsProvider";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
    const cartUpdated = (itemsDetails) =>{
        props.ReceiveItems(itemsDetails);
    }
    return (
        <MealsProvider OnItemsUpdated = {cartUpdated}>
            <AvailableMeals></AvailableMeals>
        </MealsProvider>
    );
}
export default Meals;