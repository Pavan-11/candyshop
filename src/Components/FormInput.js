import classes from './FormInput.module.css'
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';


const FormInput = () => {
    const [products, setProducts] = useState([]);
    const {addToCart, calculateTotalAmount} = useContext(CartContext);

    useEffect(() => {
        const storedData = localStorage.getItem("products");
        if (storedData) {
            setProducts(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products])
    const addProducts = (candy, description, price) => {
        const newProducts = {
            id: Date.now(),
            candy: candy,
            description: description,
            price: parseFloat(price)
        };
        
        setProducts([...products, newProducts]);
    };


    const FormSubmitHandler = (event) => {
        event.preventDefault();
        const candy = event.target.elements.candy.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        addProducts(candy, description, price);
        // addToCart(addProducts); //.......
        const newProducts = {
            id: Date.now(),
            candy: candy,
            description: description,
            price: parseFloat(price)
        };
        addToCart(newProducts)

        event.target.reset();
    }


    const removeProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    }

    
    return (
        <>
            <form onSubmit={FormSubmitHandler} className={classes.form}>

                <label htmlFor='candy'>
                    candy:
                </label>
                <input type="text" name="candy" className={classes.input} />

                <label htmlFor='description'>
                    Description:
                </label>
                <input type="text" name="description" className={classes.input} />

                <label htmlFor='price'>
                    Price:
                </label>
                <input type="number" name="price" className={classes.input} />

                <button type="submit" className={classes.btn}>Add Candy</button>
            </form>

            <table>
                <h3>Items: </h3>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.candy}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => removeProduct(product.id)} className={classes.btn}>Delete</button>
                            </td>
                            <button onClick={() => calculateTotalAmount(product.price) * 1}>1</button>
                            <button onClick={() => calculateTotalAmount(product.price) * 2}>2</button>
                            <button onClick={() => calculateTotalAmount(product.price) * 3}>3</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FormInput;