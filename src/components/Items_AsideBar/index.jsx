import React from "react";
import { AppContext } from "../../context";
//import { Product_detail } from "../Product_detail";
import { Cart_item } from "../Cart_item";

function Items_AsideBar() {
    const context = React.useContext(AppContext);
    const products = context.productsSaved;
    //console.log(products);

    return(
    <aside className={`${context.hideAside ? 'hideTag' : ''} itemsAsideBar flex flex-col fixed right-0 border-2 border-black bg-white`}>
        <div className='bg-slate-900 text-white flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>{`Product description`}</h2>
            <div>
                <button
                    onClick={() =>{
                        context.setHideAside(true);
                    }}>✖️</button>
            </div>
        </div>

        {/* <Product_detail/> */}
        <Cart_item

        />
        
    </aside>
    );
}

export {Items_AsideBar};