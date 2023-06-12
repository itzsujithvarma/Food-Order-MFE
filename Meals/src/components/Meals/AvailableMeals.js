import React, { useEffect } from "react";
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import { connect } from 'react-redux';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'Chicken in flavoured rice',
    price: 150.00,
  },
  {
    id: 'm2',
    name: 'Idly',
    description: 'South Indian Special',
    price: 30.00,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 90.00,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 60.00,
  },
];

const AvailableMeals = props => {

  useEffect(() => {
    props.OnItemsUpdated(props.items);
  }, [props.items])
  const mealsList = DUMMY_MEALS.map(meal => <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
}
const mapStateToProps = (state) => ({
  items: state.items
});
export default connect(mapStateToProps)(AvailableMeals);