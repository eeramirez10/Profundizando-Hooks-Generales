import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWhitCustomHook = () => {

    

    const { values, handleInputChange, resetForm } = useForm({ 
        name:'', 
        email:'', 
        password:''
    });

    const { name, email, password } = values; 

    useEffect(() => {
        console.log('Cambio')
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        resetForm()

    }

    return (
        <form onSubmit={ handleSubmit } className="container">
            <h1> UseEffect</h1>
            <hr />

            <div className="form-group mb-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />


            </div>

            <div className="form-group mb-2">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu correo"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-success"> Enviar </button>
        
        </form>
    )


}
