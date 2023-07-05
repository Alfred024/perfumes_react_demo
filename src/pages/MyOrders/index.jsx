import React from 'react';
import { Order } from '../../components/Order';
import { AppContext } from "../../context";


function MyOrders() {
    const context = React.useContext(AppContext);
    const ordersSaved = context.myOrders;
    let numOrder = 0;

    return ( 
        <>
          {
            ordersSaved.length>0 ?(
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
        </>
    );
}

export {MyOrders};
