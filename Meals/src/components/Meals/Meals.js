import React from "react";
import MealsProvider from "../../store/MealsProvider";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <MealsProvider>
            <AvailableMeals></AvailableMeals>
        </MealsProvider>
    );
}
export default Meals;