
import React, { useState } from "react";
import Meals from 'meals/MealsIndex';
import Header from 'header/HeaderIndex';

const Shell = () => {
const [totalPrice, setTotalPrice] = useState(0);
const [items, setItems] = useState([]);
return(
        <React.Fragment>
            <Header items = {items}/>
            <Meals ReceiveItems = {(passedDetails) => {
                setItems(passedDetails.items);
                setTotalPrice(passedDetails.totalPrice);
            }}/>
        </React.Fragment>
    );
}

export default Shell;