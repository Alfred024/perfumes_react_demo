import React from "react";

function Register() {
    return(
        <div className="signIn_registerForm mt-10 w-96 h-fit mr-auto ml-auto flex flex-col bg-slate-900 px-3 py-5 text-white">
            <h2
                className="font-medium text-2xl mb-4"
            >Register an account</h2>

            <input 
                type="text"
                placeholder="Nombre" 
                className="p-3 my-2 text-black"/>
            <input  
                placeholder="Correo"
                type="text" 
                className="p-3 my-2 text-black"/>
            <input 
                placeholder="Contraseña"
                type="passsword"
                className="p-3 my-2 text-black"/>
            <input 
                placeholder="Confirma la contraseña" 
                type="password" 
                className="p-3 my-2 text-black"/>
            
            <button 
                onClick={() =>{
                    //Guarda en el local storage un objeto con los datos de inicio de sesión
                }}
                className="w-2/3 mr-auto ml-auto bg-white p-2 my-2 text-black rounded-2xl">
                Create account
            </button>

        </div>
    );
}

export {Register};