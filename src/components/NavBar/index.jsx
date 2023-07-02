import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../../context";

function NavBar() {
    const context = React.useContext(AppContext);
    const activeStyle = 'underline underline-offset-4';

    return ( 
        <nav className='flex justify-between bg-slate-900 text-white'>
            <ul className='flex'>
                <li className=' p-2  border-r border-l border-white'>
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
                <li className=' p-2  border-r border-l border-white'>
                  <NavLink
                    to='/my-orders'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      My Orders
                  </NavLink>
                </li>
                <li className=' p-2  border-r border-l border-white'>
                  <NavLink
                    to='/my-account'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      My account
                  </NavLink>
                </li>
                <li className=' p-2  border-r border-l border-white'>
                  {`🛒 ${context.cartCount}`}
                </li>
                <li className=' p-2  border-r border-l border-white'>
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