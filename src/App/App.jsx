import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'

//Context
import { AppContext } from '../context';

//Pages
import { Home_page } from '../pages/Home_page';
import { MyAccount } from '../pages/MyAccount';
import { MyOrders } from '../pages/MyOrders';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';


//Components
import { NavBar } from '../components/NavBar';
import { Body_layout } from '../components/Body_layout'
import { Items_AsideBar } from '../components/Items_AsideBar/index.jsx';

const AppRoutes = () =>{
  const context = React.useContext(AppContext);

  let routes = useRoutes([
    {path: '/', element: <SignIn/>},
    {path: '/home', element: context.signIn ? <Home_page/> : <SignIn/>},
    {path: '/my-account', element: context.signIn ? <MyAccount/> : <SignIn/>},
    {path: '/my-orders', element: context.signIn ? <MyOrders/> : <SignIn/>},
    {path: '/register', element: context.signIn ? <Register/> : <SignIn/>},
    {path: '/*', element:  context.signIn ? <NotFound/> : <SignIn/>},
  ]);

  return routes;
}

function App() {
    return ( 
      <>
        <BrowserRouter>
        <NavBar/>

        <Body_layout>
          <AppRoutes/>
          <Items_AsideBar/>
        </Body_layout>
        
      </BrowserRouter>      
      </>
    );
}

export {App};