import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Products from '../../Products/Products';

const Home = () => {

    return (
        <div>
            <Products />
        </div>
    );
};

export default Home;