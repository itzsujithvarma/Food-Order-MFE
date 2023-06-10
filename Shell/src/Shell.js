
import React, { useEffect, useState } from "react";
import Meals from 'meals/MealsIndex';
import Header from 'header/HeaderIndex';
import Cart from 'cart/CartIndex';

const Order = React.lazy(() => import('order/OrderIndex'));
const Shell = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);
    useEffect(() => {
        setTotalPrice(calculateTotalPrice(items));
    }, [items])
    const updateStates = (det) => {
        setItems(det.items);
    }
    const addItem = (item) => {
        const newItems = [...items];
        const ind = newItems.findIndex((x) => x.id === item.id);
        newItems[ind].count = newItems[ind].count + 1;
        setItems(newItems);
    }

    const calculateTotalPrice = (items) => {
        let price = 0;
        items.map(x => {
            price = price + (x.price * x.count);
        });
        return price;
    }

    const removeItem = (id) => {
        let newItems = [...items];
        const ind = newItems.findIndex((x) => x.id === id);
        if (newItems[ind].count > 0) {
            newItems[ind].count = newItems[ind].count - 1;
        }
        setItems(newItems);
    }

    const orderItems = () => {
        setShowCart(false);
        let newItems = [...items];
        newItems.forEach(x => x.count = 0);
        setItems(newItems);
        setOrderCompleted(true);
    }

    const [showCart, setShowCart] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false);
    return (
        <React.Fragment>
            <React.Suspense fallback={ <span>loading...</span>}>
                {orderCompleted && <Order onHideCart={() => {
                    setOrderCompleted(false);
                }} />}
            </React.Suspense>

            {showCart && <Cart orderItems={orderItems} addItem={addItem} removeItem={removeItem} items={items} totalPrice={totalPrice} onHideCart={() => {
                setShowCart(false);
            }} />}
            <Header items={items} showCart={() => {
                setShowCart(true);
            }} />
            <Meals ReceiveItems={updateStates} />
        </React.Fragment>
    );
}

export default Shell;