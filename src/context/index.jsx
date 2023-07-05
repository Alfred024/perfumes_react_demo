import React from 'react';
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    
    //Para controlar el display del AsideBar
    const [hideAside, setHideAside] = React.useState(true);

    //Mostrar la descripción de las cartas
    const [cardSelected, setCardSelected] = React.useState({}); 

    //Guardar los productos añadidos en el localStorage 
    const [productsSaved, setProductsSaved] = React.useState(() =>{
        let products = localStorage.getItem('productsSaved');
        if(products){
            return JSON.parse(products);
        }else{
            localStorage.setItem('productsSaved', '[]');
            return [];
        }
    });

    //Número de prooductos en el carro
    const [cartCount, setCartCount] = React.useState(productsSaved.length);

    //Evaluar si mostrará el detalle del producto o el carrito
    const [showDetail, setShowDetail] = React.useState(true);

    //Guaradar las órdenes en un array de arrays
    const [myOrders, setMyOrders] = React.useState(() =>{
        let orders = localStorage.getItem('ordersSaved');
        if(orders){
            return JSON.parse(orders);
        }else{
            localStorage.setItem('ordersSaved', '[]');
            return [];
        }
    });

    const [temp, setTemp] = React.useState(0);
    return(
        <AppContext.Provider
            value={{
                hideAside, 
                setHideAside,
                cardSelected, 
                setCardSelected,
                productsSaved, 
                setProductsSaved,
                cartCount, 
                setCartCount,
                showDetail, 
                setShowDetail,
                myOrders, 
                setMyOrders,
                temp, 
                setTemp,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};