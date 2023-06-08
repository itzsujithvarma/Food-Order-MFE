import React, {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onOpenCart = {()=>{}}/>
            </header>
        </Fragment>
    )
}

export default Header;