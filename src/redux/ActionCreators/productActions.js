import { ADD_TO_CART } from "../ActionTypes/actionTypes"

export const AddToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product
    }
}