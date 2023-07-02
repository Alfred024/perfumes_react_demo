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
    const [cardSelected, setCardSelected] = React.useState({}); 

    return(
        <AppContext.Provider
            value={{
                hideAside, 
                setHideAside,
                cartCount,
                setCartCount,
                cardSelected, 
                setCardSelected,
            }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};