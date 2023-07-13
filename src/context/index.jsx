import React from 'react';
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{

    //Para manejar el render del NAV globalmente
    const [signIn, setSignIn] = React.useState(false);

    //Determina si hay una cuenta creada o no
    const [userCreated, setUserCreated] = React.useState(() =>{
        const userExists = localStorage.getItem("user");
        if(userExists){
            return Boolean(userExists);
        }else{
            localStorage.setItem("user", "false");
            return false;
        }
    });
    console.log(userCreated);

    //Datos del usuario
    const [userData, setUserData] = React.useState(() =>{
        const userData  =localStorage.getItem("userData");
        if(userData){
            return JSON.parse(userData);
        }else{
            localStorage.setItem("userData", "{}");
            return {};
        }
    });

    //Usamos un effect para no tener que acceder al localStorage desde el componente
    React.useEffect(()=>{
        const userDataParsed = JSON.stringify(userData);
        localStorage.setItem("userData", userDataParsed);
    }, [userData]);

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
                signIn, 
                setSignIn,
                userCreated, 
                setUserCreated,
                userData, 
                setUserData,
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