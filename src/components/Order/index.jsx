import React from "react";  
import { Order_item } from "../Order_item";

function Order() {
    //const context = React.useContext(AppContext); 
    const [hideProducts, setHideProducts] = React.useState(false);

    return(
      <div className="orderContainer w-1/2 border border-slate-900 my-5 mx-auto">
        <div className="flex justify-between bg-slate-900 text-white p-4">
          <p>Order #1</p>
          <button
            onClick={()=>{
              setHideProducts(!hideProducts)
            }}
          >
            {`${hideProducts ? '🔽' : '⬆️'}`}
          </button>
        </div>

        <div className={`orders ${hideProducts? 'hideTag':''} p-4`}>
          <Order_item/>
          <Order_item/>
        </div>
      </div>
    );
}

export {Order};