import React from "react";
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from './UI/Modal';

const Cart = (props) => {

const items = props.items;
const hasItems = items && items.length > 0;
const totalPrice = `Rs ${props.totalPrice.toFixed(2)}`;

const cartItemRemoveHandler = (id) => {
    props.removeItem(id);
}
const addCartItemHandler = (item) => {
   props.addItem(item);
}
const cartItems = ( <ul className={classes['cart-items']}> {items.map(item =>
    <CartItem 
    key ={item.id} name = {item.name} count = {item.count} price = {item.price} 
    onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {addCartItemHandler.bind(null, item)}
    />)}
</ul>)

return (
    <Modal onCloseCart = {props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onHideCart}>Close</button>
            { hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
);
}
export default Cart;