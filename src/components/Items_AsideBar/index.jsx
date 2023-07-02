import React from "react";
import { AppContext } from "../../context";

function Items_AsideBar() {
    const context = React.useContext(AppContext);

    return(
    <aside className={`${context.hideAside ? 'hideTag' : ''} itemsAsideBar flex flex-col fixed right-0 border-2 border-black bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <button
                    onClick={() =>{
                        context.setHideAside(true);
                    }}>✖️</button>
            </div>
        </div>
    </aside>
    );
}

export {Items_AsideBar};