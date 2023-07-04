import React from 'react';
import { Order } from '../../components/Order';
import { AppContext } from "../../context";


function MyOrders() {
    //const context = React.useContext(AppContext);

    return ( 
        <>
          {/* 
            La idea es poner un contenedor por cada órden, no mostrará los elementos a menos que se clickee un botón
            Para ello crearemos un componente lamado Order, y va a renderizarlo con un map
          */}
          <Order/>
        </>
    );
}

export {MyOrders};
