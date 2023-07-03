import React from "react";
import { AppContext } from "../../context";


function Card({product, price, image, category, description}) {
    const context = React.useContext(AppContext);

    return ( 
        <div 
          className="cursor-pointer relative flex flex-col w-80 h-72 m-0 bg-zinc-700 text-white ">
          <div className="w-full h-4/5 relative">
            <img 
              src={`${image}`} 
              alt="Imagén producto"
              className="w-full h-full" 
              onClick={() =>{
                //console.log(context.productsSaved);
                context.setCardSelected(
                  {
                    "title": product,
                    "price": price,
                    "image": image,
                    "description": description
                  }
                );
                context.setHideAside(false);
                //console.log(context.cardSelected);
              }}/> 

            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-white text-xs m-2 px-3 py-0.5'>{category}</span>
          </div>    

          <div className=" w-full h-fit p-1 ">
            <p>{`${product}`}</p>
            <p>{`${price}`}</p>
          </div>

          <button 
            className="addCardButton"
            onClick={() =>{
            
              let productsAdded = context.productsSaved;
              const newProduct = {
                "title": product,
                "price": price,
                "image": image,
                "description": description
              }
              productsAdded.push(newProduct);
              localStorage.setItem('productsSaved', JSON.stringify(productsAdded));
              context.setProductsSaved(productsAdded);
              //localStorage.setItem('cartCount', context.cartCount.toString());
              //context.setCartCount(productsAdded.length);
            }}
          >
            ➕
          </button>
        </div>
     );
}

export {Card};
