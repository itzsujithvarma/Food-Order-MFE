
import React, { useState } from "react";
import Meals from 'meals/MealsIndex';
import Header from 'header/HeaderIndex';
import Cart from 'cart/CartIndex';

const Shell = () => {
const [items, setItems] = useState([]);
const updateStates = (det)=>{
    setItems(det.items);
}
const [showCart, setShowCart] = useState(false);
return(
        <React.Fragment>
          { showCart && <Cart items ={items} onHideCart ={()=>{
                setShowCart(false);
            }}/>}  
            <Header items = {items} showCart = {()=>{
                setShowCart(true);
            }}/>
            <Meals ReceiveItems = {updateStates}/>
        </React.Fragment>
    );
}

export default Shell;