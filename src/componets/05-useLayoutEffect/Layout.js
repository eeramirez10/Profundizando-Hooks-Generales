import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    // let { author, quote } = data ? data[0] : { autor: null, quote: null};

    let { quote } = !!data && data[0]

    useLayoutEffect( ()=>{

        setBoxSize(pTag.current.getBoundingClientRect())
        
    }, [quote])

    return (
        <div className="container mt-2">
            <h1> LayoutEffect </h1>
            <hr />

            <blockquote 
                ref = { pTag }
                className="blockquote text-end">
                <p> {quote} </p>
                
            </blockquote>

            <pre>
                { JSON.stringify(boxSize)  }
            </pre>


            <button
                onClick={increment}
                className="btn btn-primary"
            >
                Siguiente quote
            </button>


        </div>
    )
}
