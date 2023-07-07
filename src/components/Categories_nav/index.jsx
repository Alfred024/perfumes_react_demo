import React from "react";
import { AppContext } from "../../context";

function Categories_nav() {
    const context = React.useContext(AppContext);

    return(
        <div className="categoriesNav px-5">
          <h1 className='font-light text-m'>
            All products
          </h1>
          <nav>
            <ul className="flex">
              <button 
                  onClick={() =>{
                    context.setTitleTyped('');
                    context.setCategoryName('')
                  }}
                  className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                  All Clothes 
              </button>
              <button 
                onClick={() =>{
                  context.setTitleTyped('');
                  context.setCategoryName('Electornics')
                }}
                className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                Electornics 
              </button>
              <button 
                onClick={() =>{
                  context.setTitleTyped('');
                  context.setCategoryName('Clothes')
                }}
                className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                Clothes
              </button>
              <button 
                onClick={() =>{
                  context.setTitleTyped('');
                  context.setCategoryName('Shoes')
                }}
                className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                Shoes
              </button>
              <button 
                onClick={() =>{
                  context.setTitleTyped('');
                  context.setCategoryName('Furniture')
                }}
                className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                Furniture
              </button>
              <button 
                onClick={() =>{
                  context.setTitleTyped('');
                  context.setCategoryName('Others')
                }}
                className="bg-gray-200 px-4 py-2 rounded-full m-2 font-light text-sm">
                Others
              </button>
            </ul>
          </nav>
        </div>
    );
}

export {Categories_nav};