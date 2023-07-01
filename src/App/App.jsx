import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'

//Context
import { AppContext, AppProvider } from '../context';
 
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
    //const contextVar = React.useContext(AppContext);
    //console.log(contextVar);

    return ( 
      <AppProvider>
        <AppContext.Consumer>
        {({
            cartCount,
        }) =>(

            <BrowserRouter>
              <NavBar
                cartCount={cartCount}
              />

              <Body_layout>
                <AppRoutes/>
              </Body_layout>
            
            </BrowserRouter>    
        )}
        </AppContext.Consumer>  
      </AppProvider>
    );
}

export {App};