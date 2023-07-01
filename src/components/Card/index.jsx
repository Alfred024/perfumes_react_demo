import React from "react";

function Card() {
    return ( 
        <div className="relative flex flex-col w-52 h-60 m-0 bg-zinc-700 text-white ">

          <div 
            className="w-full h-4/5 relative">

            <img 
              src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Imagén producto"
              className="w-full h-full" /> 

            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-white text-xs m-2 px-3 py-0.5'>Categorie</span>

          </div>
          
                
          <div className=" w-full h-fit p-1 ">
            <p>product name</p>
            <p>$$$</p>
          </div>

          <span className="deleteCardSpan">+</span>
        </div>

     );
}

export {Card};