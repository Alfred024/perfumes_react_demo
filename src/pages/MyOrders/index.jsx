import React from 'react';
import { AppContext } from "../../context";
import { Order } from '../../components/Order';
import { InfoOrders } from '../../components/InfoOrders';


function MyOrders() {
    const context = React.useContext(AppContext);
    const ordersSaved = context.myOrders;
    let numOrder = 0;

    return ( 
        <div className='myOrdersPage flex my-5'>
          <div className='order flex flex-col w-1/2 p-3'>
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

          <InfoOrders/>
        </div>
    );
}

export {MyOrders};
