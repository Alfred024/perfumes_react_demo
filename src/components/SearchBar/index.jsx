import React from "react";
import { AppContext } from "../../context";

function SearchBar() {
    const context = React.useContext(AppContext);

    return(
        <div className="flex p-3 items-center ">
            <input 
                className="p-3 bg-gray-100 border border-x-zinc-950"
                type="text" 
                placeholder="Busca un producto"
                onChange={(event) =>{
                  context.setTitleTyped(event.target.value);
                  console.log(context.titleTyped);
                }}
            />

            <span className="text-2xl">
              🔍
            </span>
        </div>
    );
}

export {SearchBar};