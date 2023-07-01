import React from "react";

function Card({product, price, image, category}) {
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

          <span className="deleteCardSpan">+</span>
        </div>
     );
}

export {Card};