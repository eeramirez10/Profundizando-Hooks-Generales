import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { user,setUser } = useContext(UserContext)

    const handleLogin = ()=>{
        setUser( { id:123, name: 'Zaduiel'} )

        console.log(user)
    }

    return (
        <div>

            <h1> LoginScreen </h1>
            <hr />

            <button
                onClick={ handleLogin }
                className="btn btn-success"
            >
                Login
            </button>

        </div>
    )
}
