import React from "react";
import { AppContext } from "../../context";

function Items_AsideBar() {
    const context = React.useContext(AppContext);

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

				<div className="w-full h-fit p-3">
						<img 
							src={context.cardSelected.image} 
							alt="" 
							className="w-full h-fit rounded-3xl"/>
						<div className="flex items-center justify-between mt-2"> 
							<p className='font-medium text-2xl mb-2'>
								{context.cardSelected.title}
							</p>
							<p className='font-medium text-xl mb-2' >
							{`$ ${context.cardSelected.price}`}
							</p>
						</div>
						<p className="font-light text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ut repellendus aspernatur ipsam officiis </p>
        </div>
    </aside>
    );
}

export {Items_AsideBar};