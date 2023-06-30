import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'

import { Home_page } from '../components/Home_page';
import { MyAccount } from '../components/MyAccount';
import { MyOrder } from '../components/MyOrder';
import { MyOrders } from '../components/MyOrders';
import { NotFound } from '../components/NotFound';
import { SignIn } from '../components/SignIn';

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home_page/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ]);

  return routes;
}

function App() {
    return ( 
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>      
    );
}

export {App};