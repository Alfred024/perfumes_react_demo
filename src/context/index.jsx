import { stringify } from 'postcss';
import React from 'react';
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [cartCount, setCartCount] = React.useState(() =>{
        const num = localStorage.getItem('cartCount');
        if(!num){
            localStorage.setItem('cartCount', '0');
            return 0;
        }else{
            return num;
        }
    });


    const [hideAside, setHideAside] = React.useState(true);

    //Mostrar la descripción de las cartas
    const [cardSelected, setCardSelected] = React.useState({}); 

    //Guardar los productos añadidos en el localStorage 
    const [productsSaved, setProductsSaved] = React.useState(() =>{
        let products = localStorage.getItem('productsSaved');
        if(products){
            //console.log(products);
            return JSON.parse(products);
        }else{
            localStorage.setItem('productsSaved', '[]');
            return [];
        }
    });

    return(
        <AppContext.Provider
            value={{
                hideAside, 
                setHideAside,
                cartCount,
                setCartCount,
                cardSelected, 
                setCardSelected,
                productsSaved, 
                setProductsSaved,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};