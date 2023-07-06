import { data } from 'autoprefixer';
import React from 'react';
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    
    //Para el buscador de las Cards
    const [titleTyped, setTitleTyped] = React.useState('');

    //Carrds consumidas desde la API
    const [cards, setCards] = React.useState(null);

    React.useEffect(() => {
        if(titleTyped != ''){
            fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=27')
            .then(response => response.json())
            .then(item => item.filter(x => x.title.toLowerCase().includes(titleTyped.toLowerCase())))
            .then(res => setCards(res));
        }else{
            fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=27')
            .then(response => response.json())
            .then(data => setCards(data));
        }
        
    }, [titleTyped]);

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

    return(
        <AppContext.Provider
            value={{
                cards, 
                setCards,
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
                titleTyped, 
                setTitleTyped,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};