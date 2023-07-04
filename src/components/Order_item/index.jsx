import React from "react";  
import { AppContext } from "../../context";

//function Order_item({title, price, decription, image, orderNum}) {
function Order_item() {
    const context = React.useContext(AppContext); 

    return(
        <div className="relative flex w-fit m-3 bg-gray-100 ">
          <img 
            className=" w-1/3 "
            src={`https://picsum.photos/640/640?r=8266`} alt="" />
          
          <div className=" w-fit p-3">
            <p>{`Producto`}</p>
            <p>{`$$$`}</p>

            <p className="font-light text-sm">
              {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quidem ut consequatur, corporis magnam aliquid.`}
            </p>
          </div>

          <button 
            onClick={() =>{
              let products = context.myOrders;
              // products[orderNum].splice(index,1);
              products[0].splice(index,1);

            }}
            className="w-10 h-10 bg-slate-900 absolute right-0 top-0 z-10 ">
            ✖️
          </button>
		    </div> 
    );
}

export {Order_item};