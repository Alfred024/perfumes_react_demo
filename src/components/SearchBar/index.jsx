import React from "react";
import { AppContext } from "../../context";

function SearchBar() {
    const context = React.useContext(AppContext);

    return(
        <div className="flex p-3 items-center justify-end">
            <input 
                className="p-3 bg-slate-900 text-white border border-none"
                type="text" 
                placeholder="Busca un producto"
                onChange={(event) =>{
                  context.setTitleTyped(event.target.value);
                }}
            />

            <span className="text-2xl bg-slate-900 p-2 border border-l-neutral-50">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </span>
        </div>
    );
}

export {SearchBar};