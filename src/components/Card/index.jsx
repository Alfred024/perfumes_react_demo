import React from "react";
import { AppContext } from "../../context";


function Card({product, price, image, category}) {
    const context = React.useContext(AppContext);

    return ( 
        <div className="relative flex flex-col w-80 h-72 m-0 bg-zinc-700 text-white ">

          <div className="w-full h-4/5 relative">
            <img 
              src={`${image}`} 
              alt="Imagén producto"
              className="w-full h-full" /> 

            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-white text-xs m-2 px-3 py-0.5'>{category}</span>
          </div>
          
          <div className=" w-full h-fit p-1 ">
            <p>{`${product}`}</p>
            <p>{`${price}`}</p>
          </div>

          <button 
            className="deleteCardSpan"
            onClick={() =>{
              context.setCartCount(++context.cartCount);
              localStorage.setItem('cartCount', context.cartCount.toString());
            }}
          >+</button>
        </div>
     );
}

export {Card};