import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 m-4">
            {
                cart.sort((a, b) => a._id - b._id).map((product) => (<ProductCard product={product} />))
            }
        </div>
    );
};

export default Cart;