import React from "react";

function Cart_item({title, price, img}) {
    return(
       <div className="relative flex w-fit m-2 rounded-2xl z-0 bg-gray-100 overflow-hidden">
				<img 
					className=" w-1/3"
					src={img} alt="" />
				
				<div className=" w-fit px-2">
					<p>{title}</p>
					<p>{`$ ${price}`}</p>
				</div>

				<button className="w-10 h-10 bg-slate-900 absolute right-0 bottom-9 z-10 rounded-full">
					✖️
				</button>
			 </div> 
    );
}

export {Cart_item};