import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="products">Review</Link></li>
        <li><Link to="cart">
            <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="#004e66">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

        </Link></li>
        <li><Link to="login">Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">S~Tech</a>
            </div>
            <div class="navbar-end hidden md:flex">
                <ul class="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;