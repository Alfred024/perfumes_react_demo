import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    const activeStyle = 'underline underline-offset-4';

    return ( 
        <nav className='flex justify-between bg-neutral-100 p-2'>
            <ul className='flex'>
                <li className=' px-2 '>
                  <NavLink
                    to='/'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      Home
                  </NavLink>
                </li>
            </ul>

            <ul className='flex'>
                <li className=' px-2 '>
                  <NavLink
                    to='/my-orders'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      My Orders
                  </NavLink>
                </li>
                <li className=' px-2 '>
                  <NavLink
                    to='/my-account'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      My account
                  </NavLink>
                </li>
                <li className=' px-2 '>
                  🛒
                </li>
                <li className=' px-2 '>
                  <NavLink
                    to='/sign-in'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      Sign In
                  </NavLink>
                </li>

            </ul>
        </nav>
     );
}

export {NavBar};