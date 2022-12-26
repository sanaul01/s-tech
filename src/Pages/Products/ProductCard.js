import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AddToCart, RemoveFromCart } from '../../redux/ActionCreators/productActions';
import { ADD_TO_CART } from '../../redux/ActionTypes/actionTypes';

const ProductCard = ({ product }) => {
    const { image, model, price } = product;

    const dispatch = useDispatch();
    const {pathname} = useLocation();
    return (
        <div class="card bg-base-100 relatives shadow-lg hover:shadow-2xl ">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            {pathname.includes("cart") && <div className='grid place-items-center bg-indigo-500 text-white h-8 w-8 rounded-full absolute top-2 right-2'>
            <p>{product.quantity}</p>
            </div>}
            <div class="card-body items-center text-center">
                <h2 class="card-title">{model}</h2>
                <p>Price: {price} k</p>
                {pathname.includes("cart") && <div class="card-actions">
                    <button onClick={()=> dispatch(RemoveFromCart(product))} class="btn btn-primary w-72%">Remove from Cart</button>
                </div>}
                {!pathname.includes("cart") && <div class="card-actions">
                    <button onClick={()=> dispatch(AddToCart(product))} class="btn btn-primary w-72">Add to Cart</button>
                </div>}
            </div>
        </div>
    );
};

export default ProductCard;