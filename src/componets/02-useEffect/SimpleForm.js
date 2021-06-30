import React from 'react'
import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey')

    }, []);

    useEffect(() => {
        // console.log('formstate cambio')
    }, [formState]);

    useEffect(() => {
        // console.log('email change')
    }, [email])



    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }


    return (
        <div className="container">
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

            <div className="form-group">
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

            { name === '123' && <Message /> }
        </div>
    )
}
