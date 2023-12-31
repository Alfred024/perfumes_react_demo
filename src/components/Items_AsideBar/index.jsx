import React from "react";

//Components
import { AppContext } from "../../context";
import { Product_detail } from "../Product_detail";
import { Cart_item } from "../Cart_item";

//Functions
import { totalPrice } from "../../utils";


function Items_AsideBar() {
    const context = React.useContext(AppContext);

    const saveOrder= (items) =>{
      context.setMyOrders([...context.myOrders, items]);
      console.log(context.myOrders);

      //Está el problema que agarra el valor del estado uno antes de lo que se espera
      //localStorage.setItem('ordersSaved', `${context.myOrders}`);
      localStorage.setItem('productsSaved', '[]');
      context.setProductsSaved([]);
      context.setCartCount(0);
    }

    return(
    <aside className={`${context.hideAside ? 'hideTag' : ''} itemsAsideBar flex flex-col fixed right-0 border-2 border-black bg-white z-50`}>
        <div className='bg-slate-900 text-white flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>{`${context.showDetail?'Product detail':'Cart'}`}</h2>
            <div>
                <button
                    onClick={() =>{
                        context.setHideAside(true);
                    }}>✖️</button>
            </div>
        </div>

        {
            context.showDetail ? (
                <Product_detail/>
            ):(
              <div className="cartItemsContainer">
                    {
                       context.productsSaved?.map((cartItem, index) =>(
                            <Cart_item
                                key={index}
                                index={index}
                                title={cartItem.title}
                                price={cartItem.price}
                                img={cartItem.image}
                            />
                        ))
                    }
                  

                  <div className="flex flex-col justify-center m-2 p-2">
                    <div className="flex justify-between">
                      <p className="font-medium text-xl mb-2">Total:</p>
                      <p className="font-medium text-xl mb-2">{`$${totalPrice(context.productsSaved)}`}</p>
                    </div>

                    <button 
                      onClick={() =>{
                        saveOrder(context.productsSaved);
                      }}
                      className="w-full p-2 bg-black text-cyan-50">
                      Checkout
                    </button>
                  </div>
                </div>
            )
        }
        
    </aside>
    );
}

export {Items_AsideBar};