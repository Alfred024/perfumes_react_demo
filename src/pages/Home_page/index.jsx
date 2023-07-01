import React from 'react';
import { Card } from '../../components/Card';
import { Card_container } from '../../components/Card_container/index.js';

function Home_page() {
    return ( 
      <>
        Home
        <Card_container>
          <Card/>
          <Card/>
          <Card/>

          <Card/>
          <Card/>
          <Card/>
        </Card_container>
      </>      
    );
}

export {Home_page};
