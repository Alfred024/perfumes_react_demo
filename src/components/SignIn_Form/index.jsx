import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

import { AppContext } from "../../context";

const userInputs = {
    email: "",
    password: "",
}

function SignIn_Form() {
    const context = React.useContext(AppContext);
    const navigate = useNavigate();
    const [dataTyped, setDataTyped] = React.useState(userInputs);

    const updateData = (event) =>{
        const newValue = event.target.value;
        setDataTyped({
            ...dataTyped,
            [event.target.name]: newValue,
        });
    }

    return(
        <div className="signIn_registerForm w-96 mr-auto ml-auto flex flex-col bg-slate-900 px-3 py-5 text-white">
            <h2
                className="font-medium text-2xl mb-4"
            >Iniciar sesión</h2>

            <input
                name="email"
                onChange={updateData}   
                placeholder="Correo"
                type="text" 
                className="p-3 my-2 text-black"/>
            <input
                name="password"
                onChange={updateData}  
                placeholder="Contraseña"
                type="passsword"
                className="p-3 my-2 text-black"/>
            
            <button 
                onClick={() =>{
                    const realData = {
                        "email": context.userData.email,
                        "password": context.userData.password
                    }
                    if(JSON.stringify(realData) === JSON.stringify(dataTyped)){
                        context.setSignIn(true);
                        navigate('/home');
                    }else{
                        console.log(dataTyped);
                        console.log('Datos incorrectos');
                    }
                }}
                className="w-2/3 mr-auto ml-auto bg-white p-2 my-2 text-black rounded-2xl">
                Acceder
            </button>

            <NavLink
                to='/register'>
                <span
                    className={`${context.userCreated ? 'hideTag' : ''} font-light text-sm underline cursor-pointer mt-2`} >
                    Crear cuenta
                </span>
            </NavLink>
            
        </div>
    );
}

export {SignIn_Form};