import React from "react";
import { NavLink } from 'react-router-dom';


function SignIn_Form() {
    return(
        <div className="signIn_registerForm w-96 mr-auto ml-auto flex flex-col bg-slate-900 px-3 py-5 text-white">
            <h2
                className="font-medium text-2xl mb-4"
            >Iniciar sesión</h2>

            <input  
                placeholder="Correo"
                type="text" 
                className="p-3 my-2 text-black"/>
            <input 
                placeholder="Contraseña"
                type="passsword"
                className="p-3 my-2 text-black"/>
            
            <button className="w-2/3 mr-auto ml-auto bg-white p-2 my-2 text-black rounded-2xl">
                Acceder
            </button>

            <NavLink
                to='/register'>
                <span
                    className="font-light text-sm underline cursor-pointer mt-2" >
                    Crear cuenta
                </span>
            </NavLink>
            
        </div>
    );
}

export {SignIn_Form};