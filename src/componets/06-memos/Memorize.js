import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );

    const [show, setShow ] = useState(true)

    return (
        <div className="container"> 
            <h1> Memorize </h1>
            <h1> Counter: <Small  counter={counter}  /> </h1>
            <hr/>

            <button
                onClick={ increment }
                className="btn btn-success mx-2"
            >
                +1
            </button>

            <button
                onClick={ ()=> setShow(!show) }
                className="btn btn-primary"
            >

                Show/Hide { JSON.stringify( show ) }
                
            </button>
        </div>
    )
}
