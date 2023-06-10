import React from "react";
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from './UI/Modal';

const Cart = (props) => {

// const ctxt = useContext(CartContext);
const hasItems = true;
const items = [];
const totalPrice = `Rs 30.00`;

const cartItemRemoveHandler = (id) => {
   // ctxt.removeItem(id);
}
const addCartItemHandler = (item) => {
   // ctxt.addItem({...item, count: 1});
}
const cartItems = ( <ul className={classes['cart-items']}> {items.map(item =>
    <li><CartItem 
    key ={item.id} name = {item.name} count = {item.count} price = {item.price} 
    onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {addCartItemHandler.bind(null, item)}
    /></li>)}
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