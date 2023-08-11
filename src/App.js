import React, { useState } from 'react';
import { CartProvider } from './Components/CartContext';
import './App.css';
import FormInput from './Components/FormInput';
import CartButton from './Components/CartButton';
import Cart from './Components/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <CartButton onShow={showCartHandler} />
      <FormInput />
    </CartProvider>
  );
}

export default App;
