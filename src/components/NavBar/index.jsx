import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../../context";

function NavBar() {
    const context = React.useContext(AppContext);
    const activeStyle = 'underline underline-offset-4';
    const [hideVerticalNav, setHideVerticalNav] = React.useState(true);

    return ( 
    <>
        <nav className={`${context.signIn ? '' : 'p-5'} flex justify-between bg-slate-900 text-white `}>
            <ul className='flex'>
                <li className={`${context.signIn ? '' : 'hideTag'} p-2  border-r border-l border-white`}>
                  <NavLink
                    to='/home'
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      Home
                  </NavLink>
                </li>
            </ul>

            <ul className='flex navBarHorizontal'>
                <li className={`${context.signIn ? '' : 'hideTag'} p-2  border-r border-l border-white`}>
                  <NavLink
                    to='/'
                    onClick={() =>{ context.setSignIn(false) }}
                    className={({isActive}) =>{
                      isActive ? activeStyle : undefined
                    }}>
                      Sign Out
                  </NavLink>
                </li>
                <li className={`${context.signIn ? '' : 'hideTag'} p-2  border-r border-l border-white`}>
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
                  className={`${context.signIn ? '' : 'hideTag'} p-2  border-r border-l border-white`}
                  onClick={() =>{
                    context.setShowDetail(false);
                    context.setHideAside(false);
                  }}>
                    <i class="fa-solid fa-cart-shopping mr-1"></i>
                    {`${context.cartCount}`}
                    My cart
                </button>
                <li className={`${context.signIn ? '' : 'hideTag'} p-2  border-r border-l border-white`}>
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
              className={`displayVerticalNav pr-3`}>
                <i className={`fa-solid fa-bars ${context.signIn ? '' : 'hideTag'}`}></i>
            </button>
        </nav>

        <div 
          className={`navBarVertical  ${hideVerticalNav ? 'hideTag' : 'flex'} w-1/2 h-full absolute bg-slate-900 text-white right-0 z-40`}>
          <li className='flex justify-center p-2  border-r border border-white'>
            <NavLink
                to='/'
                onClick={() =>{ 
                  context.setSignIn(false);
                  setHideVerticalNav(true);
                }}
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