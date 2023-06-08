import React from "react";
import { createRoot } from "react-dom/client";
import Meals from 'meals/MealsIndex';
import Header from 'header/HeaderIndex';

const root = createRoot(document.getElementById('root'));
    root.render(
        <React.Fragment>
            <Header/>
            <Meals ReceiveItems = {(details) => {console.log(details)}}/>
        </React.Fragment>
    );