import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../../context";

function NavBar() {
    const context = React.useContext(AppContext);
    const activeStyle = 'underline underline-offset-4';
    const [hideVerticalNav, setHideVerticalNav] = React.useState(true);

    return ( 
    <>
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

            <ul className='flex navBarHorizontal'>
                <li className=' p-2  border-r border-l border-white'>
                  <NavLink
                    to='/sign-in'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      Sign Out
                  </NavLink>
                </li>
                <li className=' p-2  border-r border-l border-white'>
                  <NavLink
                    to='/my-account'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      <i className="fa-solid fa-user mr-1"></i>
                      My account
                  </NavLink>
                </li>
                <button 
                  className=' p-2  border-r border-l border-white'
                  onClick={() =>{
                    context.setShowDetail(false);
                    context.setHideAside(false);
                  }}>
                    <i class="fa-solid fa-cart-shopping mr-1"></i>
                    {`${context.cartCount}`}
                    My cart
                </button>
                <li className=' p-2  border-r border-l border-white'>
                  <NavLink
                    to='/my-orders'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      <i className="fa-solid fa-bag-shopping mr-1"></i>
                      My orders
                  </NavLink>
                </li>
            </ul>
            <button 
              onClick={() =>{
                setHideVerticalNav(!hideVerticalNav);
              }}
              className='displayVerticalNav p-2 '>
                <i className="fa-solid fa-bars"></i>
            </button>
        </nav>

        <div 
          className={`navBarVertical ${hideVerticalNav ? 'hideTag' : 'flex'} w-1/2 h-full absolute bg-slate-900 text-white right-0 z-40`}>
          <li className='flex justify-center p-2  border-r border border-white'>
            <NavLink
                to='/sign-in'
                className={({isActive}) =>{
                  isActive ? activeStyle : undefined
                }}>
                  Sign Out
            </NavLink>
          </li>
          <li className='flex justify-center p-2  border-r border border-white'>
            <NavLink
                to='/my-account'
                className={({isActive}) =>{
                  isActive ? activeStyle : undefined
                }}>
                  <i className="fa-solid fa-user mr-1"></i>
                  My account
            </NavLink>
          </li>
          <button 
              className='p-2  border-r border border-white'
              onClick={() =>{
                context.setShowDetail(false);
                context.setHideAside(false);
                context.setHideVerticalNav(true);
              }}>
                <i className="fa-solid fa-cart-shopping mr-1"></i>
                {`${context.cartCount}`}
                My cart
          </button>
          <li className='flex justify-center p-2  border-r border border-white'>
            <NavLink
                to='/my-orders'
                className={({isActive}) =>{
                  isActive ? activeStyle : undefined
                }}>
                  <i className="fa-solid fa-bag-shopping mr-1"></i>
                  My orders
            </NavLink>
          </li>
        </div>
</>
     );
}

export {NavBar};