import React from "react";  
import { AppContext } from "../../context";

function Order_item({title, price, decription, image, orderNum}) {
    const context = React.useContext(AppContext); 

    return(
        <div className="relative flex w-fit m-3 bg-gray-100 ">
          <img 
            className=" w-1/3 "
            src={`${image}`} alt="" />
          
          <div className=" w-fit p-3">
            <p>{`${title}`}</p>
            <p>{`$${price}`}</p>

            <p className="font-light text-sm">
              {`${decription}.`}
            </p>
          </div>

          <button 
            onClick={() =>{
              let products = context.myOrders;
              products[orderNum].splice(index,1);

            }}
            className="w-10 h-10 bg-slate-900 absolute right-0 top-0 z-10 ">
            ✖️
          </button>
		    </div> 
    );
}

export {Order_item};