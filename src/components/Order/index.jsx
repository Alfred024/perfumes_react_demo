import React from "react";  
import { AppContext } from "../../context";

import { Order_item } from "../Order_item";

//Functions
import { totalPrice } from "../../utils";

function Order({index, numOfOrder}) {
    const context = React.useContext(AppContext); 
    const [hideProducts, setHideProducts] = React.useState(false);

    return(
      context.myOrders[index].length >0 ? (
        <div className="orderContainer w-1/2 border border-slate-900 my-5 mx-auto">

          <div className="flex justify-between bg-slate-900 text-white p-4">
            <p>{`Order ID: ${numOfOrder}`}</p>
            <button
              onClick={()=>{
                setHideProducts(!hideProducts)
              }}
            >
              {`${hideProducts ? '🔽' : '⬆️'}`}
            </button>
          </div>

          <div className="flex justify-between bg-slate-900 text-white p-4 border-t border-white">
            <div className="flex">  
              <p>{`Total: $${totalPrice(context.myOrders[index])}`}</p>
            </div>
            
            <p>{`Number of items: ${context.myOrders[index].length}`}</p>
          </div>

          <div className={`orders ${hideProducts? 'hideTag':''} p-4`}>
            {
              context.myOrders[index].map((product, productIndex) =>(
                <Order_item
                  key={`${numOfOrder}${productIndex}`}
                  title={product.title}
                  price={product.price}
                  decription={'alkjsadlkjslknlk lkjsalk lksajldk salk sa lksajldkjsalkjdl lsakjdlk'}
                  image={product.image}
                  orderNum={index}
                  itemIndex={productIndex}
                />
              ))
            }
          </div>
          
        </div>
      ) : (
        <></>
      )
      
    );
}

export {Order};