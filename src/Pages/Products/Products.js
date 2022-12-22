import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("product.json")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    console.log(products.length)
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-8">
            {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
            ))}
        </div>
    );
};

export default Products;