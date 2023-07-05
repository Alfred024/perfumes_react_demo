import React from 'react';
import { Order } from '../../components/Order';
import { AppContext } from "../../context";


function MyOrders() {
    const context = React.useContext(AppContext);
    const ordersSaved = context.myOrders;

    return ( 
        <>
          {
            ordersSaved.length>0 ?(
                ordersSaved.map(() =>(
                  <Order/>
                ))
            ):(
              <div>
                Aún no hay órdenes
              </div>
            )
          }
        </>
    );
}

export {MyOrders};
