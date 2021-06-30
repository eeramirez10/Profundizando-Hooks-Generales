import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter( 200 );
    const [show, setShow ] = useState(true)


    const memoProcesoPesado = useMemo( () => procesoPesado(counter) ,[counter]);

    return (
        <div className="container"> 
            <h1> MemoHook </h1>
            <h3> Counter: <small> {counter} </small></h3>
            <hr/>

            <p> { memoProcesoPesado } </p>

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
