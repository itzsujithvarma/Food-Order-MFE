
import React, { useState } from "react";
import Meals from 'meals/MealsIndex';
import Header from 'header/HeaderIndex';

const Shell = () => {
const [totalPrice, setTotalPrice] = useState(0);
const [items, setItems] = useState([]);
const updateStates = (det)=>{
    setItems(det.items);
    setTotalPrice(det.totalPrice);
}
return(
        <React.Fragment>
            <Header items = {items}/>
            <Meals ReceiveItems = {updateStates}/>
        </React.Fragment>
    );
}

export default Shell;