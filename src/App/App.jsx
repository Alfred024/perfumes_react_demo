import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'

//Context
import { AppProvider } from '../context';

//Pages
import { Home_page } from '../pages/Home_page';
import { MyAccount } from '../pages/MyAccount';
import { MyOrder } from '../pages/MyOrder';
import { MyOrders } from '../pages/MyOrders';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';

//Components
import { NavBar } from '../components/NavBar';
import { Body_layout } from '../components/Body_layout'
import { Items_AsideBar } from '../components/Items_AsideBar/index.jsx';

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
      <AppProvider>
        <BrowserRouter>
        <NavBar/>

        <Body_layout>
          <AppRoutes/>
          <Items_AsideBar/>
        </Body_layout>
        
      </BrowserRouter>      
      </AppProvider>
    );
}

export {App};