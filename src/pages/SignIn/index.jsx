import React from 'react';
import { SignIn_Form } from '../../components/SignIn_Form';


//Aún falta ver si es conveniente armar todo el HTML del form aquí mismo, o seguir implementando un componente
//Si estamos en esta página debemos de ocultar el navBar con las demás opciones
function SignIn() {
    return ( 
      <div className='mt-10'>
        
        <SignIn_Form/>
      </div>      
    );
}

export {SignIn};
