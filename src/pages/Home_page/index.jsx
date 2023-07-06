import React from 'react';

import { SearchBar } from '../../components/SearchBar/index.jsx';
import { Card_container } from '../../components/Card_container/index.js';

function Home_page() {
    return ( 
      <>
        <SearchBar/>
        <Card_container/>
      </>      
    );
}

export {Home_page};
