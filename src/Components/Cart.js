// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Modal from './Modal';




const Cart = (props) => {
    const { cartItems, removeFromCart, calculateTotalAmount } = useContext(CartContext);

    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <span>{item.candy} - ${item.price}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                <p>Total Amount: ${calculateTotalAmount()}</p>
                <p>Number of Items: {cartItems.length}</p>
            </div>
        </Modal>
    );
};

export default Cart;
