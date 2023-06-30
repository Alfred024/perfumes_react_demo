import React from 'react';
import { Home_page } from '../components/Home_page';
import { MyAccount } from '../components/MyAccount';
import { MyOrder } from '../components/MyOrder';
import { MyOrders } from '../components/MyOrders';
import { NotFound } from '../components/NotFound';
import { SignIn } from '../components/SignIn';

function App() {
    return ( 
      <div>
        <MyOrder/>
      </div>      
    );
}

export {App};