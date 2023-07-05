import React from "react";  
import { AppContext } from "../../context";

import { Order_item } from "../Order_item";

function Order({index, numOfOrder}) {
    const context = React.useContext(AppContext); 
    const [hideProducts, setHideProducts] = React.useState(false);

    return(
      <div className="orderContainer w-1/2 border border-slate-900 my-5 mx-auto">
        <div className="flex justify-between bg-slate-900 text-white p-4">
          <p>{`Order #${numOfOrder}`}</p>
          <button
            onClick={()=>{
              setHideProducts(!hideProducts)
            }}
          >
            {`${hideProducts ? '🔽' : '⬆️'}`}
          </button>
        </div>

        <div className={`orders ${hideProducts? 'hideTag':''} p-4`}>
          {
            context.myOrders? (
              context.myOrders[index].map((product) =>(
                <Order_item
                  title={product.title}
                  price={product.price}
                  decription={'alkjsadlkjslknlk lkjsalk lksajldk salk sa lksajldkjsalkjdl lsakjdlk'}
                  image={product.image}
                  orderNum={index}
                />
              ))
            ) : (
              <p>mamón</p>
            )
          }
        </div>
      </div>
    );
}

export {Order};