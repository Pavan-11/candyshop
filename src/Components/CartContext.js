// CartContext.js
import axios from 'axios';
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [remove, setRemove] = useState(false);

    // Function to add item to the cart
    const addToCart = async(item) => {
        setCartItems([...cartItems, item]);
        try{
            const res = await axios.post('https://crudcrud.com/api/8649ce53cb4a4a25b28d35e3814eb047',{...item})
        }catch(err){
            console.log('Error in adding items', err )
        }
    };

    // Function to remove item from the cart
    const removeFromCart = async(itemId) => {
        // setCartItems(cartItems.filter((item) => item.id !== itemId));
        try {
            const response = await axios.delete(`https://crudcrud.com/api/8649ce53cb4a4a25b28d35e3814eb047/${itemId}`)
            axios.get(`https://crudcrud.com/api/8649ce53cb4a4a25b28d35e3814eb047`).then(response => setCartItems(response.data))
                .catch(err => console.log(err.message));
            console.log("itemId", itemId)
            const items = cartItems.filter((item) => item._id !== itemId);
            setCartItems(items);
            console.log("itemss", items);
            setRemove(!remove);
        } catch (error) {
            console.error('Error removing item from cart: ', error.message)
        }
    };

    // Function to calculate the total amount of the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                calculateTotalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
