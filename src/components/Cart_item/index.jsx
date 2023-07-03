import React from "react";
import { AppContext } from "../../context";

function Cart_item({index, title, price, img}) {
	const context = React.useContext(AppContext);

    return(
       <div className="relative flex w-fit m-2 rounded-2xl z-0 bg-gray-100 overflow-hidden">
				<img 
					className=" w-1/3"
					src={img} alt="" />
				
				<div className=" w-fit px-2">
					<p>{title}</p>
					<p>{`$ ${price}`}</p>
				</div>

				<button 
					onClick={() =>{
						let products = context.productsSaved;
						products.splice(index,1);
						console.log(products);
						context.setCartCount(products.length);
						localStorage.setItem('productsSaved', JSON.stringify(context.productsSaved));
						//context.setProductsSaved(products);
						//AQUÍ ES DONDE DEBE CAMBIAR EL VALOR DEL ESTADO CON EL SET PARA RERENDERIZAR
					}}
					className="w-10 h-10 bg-slate-900 absolute right-0 bottom-9 z-10 rounded-full">
					✖️
				</button>
			 </div> 
    );
}

export {Cart_item};