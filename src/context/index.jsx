import { data } from 'autoprefixer';
import React from 'react';
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{

    //Determina si hay una cuenta creada o no
    const [userCreated, setUserCreated] = React.useState(() =>{
        const userExists = localStorage.getItem("user");
        if(userExists){
            return Boolean(userExists);
        }else{
            return false;
        }
    });

    //Cards redered by the category value
    const [categoryName, setCategoryName] = React.useState('');

    //Para el buscador de las Cards
    const [titleTyped, setTitleTyped] = React.useState('');

    //Cards consumidas desde la API
    const [cards, setCards] = React.useState(null);

    React.useEffect(() => {
        if(!categoryName || titleTyped){
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
        }else{
            console.log(categoryName);
            fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=27')
                .then(response => response.json())
                .then(item => item.filter(x => x.category.name.toLowerCase().includes(categoryName.toLowerCase())))
                //.then(data => console.log(data))
                .then(res => setCards(res));
        }
        
    }, [titleTyped, categoryName]);

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
                userCreated, 
                setUserCreated,
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
                categoryName, 
                setCategoryName,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};