import React from "react";
import { connect } from 'react-redux';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { addItem } from "../../../redux-store/actions";

const MealItem = (props) =>{
    const price = `Rs ${props.price.toFixed(2)}`
    const addToCart = (totalCount) => {
        const newitem = {
            id: props.id,
            name: props.name,
            count: totalCount,
            price: props.price
        }
        props.addItem(newitem)
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div><MealItemForm onAddToCart = {addToCart} id = {props.id}/></div>
        </li>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
  });
  
  const mapDispatchToProps = {
    addItem,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MealItem);