import React from "react";  
import { Cart_item } from "../Cart_item";

function Order() {
    const [hideProducts, setHideProducts] = React.useState(false);

    return(
      <div className="orderContainer border border-slate-900 m-5">
        <div className="flex justify-between bg-slate-900 text-white p-4">
          <p>Order #1</p>
          <button
            onClick={()=>{
              setHideProducts(!hideProducts)
            }}
          >⬇️</button>
        </div>

        <div className={`orders ${hideProducts? 'hideTag':''} p-4`}>
          <Cart_item
              key={0}
              index={0}
              title={'Producto 1a'}
              price={300}
              img={'https://images.pexels.com/photos/3686770/pexels-photo-3686770.jpeg?auto=compress&cs=tinysrgb&w=1600'}
          />      
          
          <Cart_item
              key={1}
              index={1}
              title={'Producto 2a'}
              price={400}
              img={'https://images.pexels.com/photos/3686770/pexels-photo-3686770.jpeg?auto=compress&cs=tinysrgb&w=1600'}
          />    
        </div>
      </div>
    );
}

export {Order};