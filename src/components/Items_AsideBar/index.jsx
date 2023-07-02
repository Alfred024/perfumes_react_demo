import React from "react";

function Items_AsideBar() {
    return(
    <aside className='itemsAsideBar flex flex-col fixed right-0 border-2 border-black bg-white'>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <button
                    onClick={() =>{
                        console.log('Cambiar estado a false para que se le anexe una clase que cambie su display y se oculte');
                    }}>✖️</button>
            </div>
        </div>
    </aside>
    );
}

export {Items_AsideBar};