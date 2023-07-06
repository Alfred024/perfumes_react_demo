import React from 'react';

import { SearchBar } from '../../components/SearchBar/index.jsx';
import { Card_container } from '../../components/Card_container/index.js';

function Home_page() {
    return ( 
      <>
        <SearchBar/>
          <div className='font-light text-sm ml-10'>
            All products
          </div>
          //Componente que despliega las categorías
        <Card_container/>
      </>      
    );
}

export {Home_page};
