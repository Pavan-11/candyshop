import React from 'react';
import classes from  './CartButton.module.css';
// import { CartContext } from './CartContext';


const CartButton = (props) => {
    // const cartCtx = useContext(CartContext);

    // const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    //     return currNumber + item.amount;
    // }, 0)


    return(
        <>
        <button className={classes.btn} onClick={props.onShow}>
                Your Cart
            <span className={classes.badge}>
                {/* {numberOfCartItems} */}
            </span>
        </button>
        </>
    )
}
export default CartButton;