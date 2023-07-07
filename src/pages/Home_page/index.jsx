import React from 'react';

import { SearchBar } from '../../components/SearchBar/index.jsx';
import { Card_container } from '../../components/Card_container/index.js';
import { Categories_nav } from '../../components/Categories_nav/index.jsx';

function Home_page() {
    return ( 
      <>
        <SearchBar/>
        <Categories_nav/>
        <Card_container/>
      </>      
    );
}

export {Home_page};
