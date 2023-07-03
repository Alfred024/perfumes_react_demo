import React from "react";
import { AppContext } from "../../context";

function Product_detail() {
    const context = React.useContext(AppContext);

    return(
        <div className="w-full h-fit p-3">
			<img 
				src={context.cardSelected.image} 
				alt="" 
				className="w-full h-fit rounded-3xl"/>
			<div className="flex items-center justify-between mt-2"> 
				<p className='font-medium text-2xl mb-2'>
					{context.cardSelected.title}
				</p>
				<p className='font-medium text-xl mb-2' >
					{`$ ${context.cardSelected.price}`}
				</p>
			</div>
			<p className="font-light text-sm">
			{`$ ${context.cardSelected.description}`}
			</p>
        </div>
    );
}

export {Product_detail};