import React from "react";
import { createRoot } from "react-dom/client";
import Meals from 'meals/MealsIndex'

const root = createRoot(document.getElementById('root'));
    root.render(
        <React.Fragment>
            <Meals />
        </React.Fragment>
    );