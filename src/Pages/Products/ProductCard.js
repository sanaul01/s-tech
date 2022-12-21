import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../redux/ActionCreators/productActions';
import { ADD_TO_CART } from '../../redux/ActionTypes/actionTypes';

const ProductCard = ({ product }) => {
    const { image, model, price } = product;

    const dispatch = useDispatch();
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{model}</h2>
                <p>Price: {price} k</p>
                <div class="card-actions">
                    <button onClick={()=> dispatch(AddToCart(product))} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;