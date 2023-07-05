import React from 'react';
import { Order } from '../../components/Order';
import { AppContext } from "../../context";


function MyOrders() {
    const context = React.useContext(AppContext);
    const ordersSaved = context.myOrders;
    let numOrder = 0;

    return ( 
        <div className='myOrdersPage'>
          {
           context.myOrders.length >0 ?(
                ordersSaved.map(() =>(
                  <Order
                    key={numOrder+1}
                    index={numOrder}
                    numOfOrder={++numOrder}
                  />
                ))
            ):(
              <div>
                 Aún no hay órdenes
              </div>
            )
          }
        </div>
    );
}

export {MyOrders};
