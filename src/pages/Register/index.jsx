import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context";

const userInputs = {
    name: "",
    email: "",
    password: "",
    password2 :""
}

function Register() {
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
    const checkPasswords = () =>{
        if (dataTyped.password === dataTyped.password2)
            return true
        else   
            return false
    }

    return(
        <form 
            onSubmit={(event) =>{
                event.preventDefault();
                if (checkPasswords){
                    context.setUserData(dataTyped);
                    console.log("Se han guardado los datos del usuario");
                    navigate('/sign-in');
                }else{
                    console.log("Que muestre un span que diga que las contraseñas no coinciden")
                }
            }}
            className="signIn_registerForm mt-10 w-96 h-fit mr-auto ml-auto flex flex-col bg-slate-900 px-3 py-5 text-white">
            <h2
                className="font-medium text-2xl mb-4"
            >Register an account</h2>

            <input
                name="name"
                onChange={updateData} 
                type="text"
                placeholder="Nombre" 
                className="p-3 my-2 text-black"/>
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
            <input
                name="password2"
                onChange={updateData} 
                placeholder="Confirma la contraseña" 
                type="password" 
                className="p-3 my-2 text-black"/>
            
            <button 
                type="submit"
                className="w-2/3 mr-auto ml-auto bg-white p-2 my-2 text-black rounded-2xl">
                Create account
            </button>

        </form>
    );
}

export {Register};