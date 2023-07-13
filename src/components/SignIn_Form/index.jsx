import React from "react";

function SignIn_Form() {
    return(
        <div className="signInForm w-96 mr-auto ml-auto flex flex-col bg-slate-900 px-3 py-5 text-white">
            <h2
                className="font-medium text-2xl mb-4"
            >Registro</h2>

            <input  
                placeholder="Correo"
                type="text" 
                className="p-3 my-2 text-black"/>
            <input 
                placeholder="Contraseña"
                type="passsword"
                className="p-3 my-2 text-black"/>
            
            <button className="w-2/3 mr-auto ml-auto bg-white p-2 my-2 text-black rounded-2xl">
                Sign In
            </button>

            <span
                className="font-light text-sm underline cursor-pointer mt-2" >
                Crear cuenta
            </span>
        </div>
    );
}

export {SignIn_Form};