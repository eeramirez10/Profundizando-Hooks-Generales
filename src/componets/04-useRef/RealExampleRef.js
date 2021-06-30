

import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = ()=>{
        setShow( !show )
    }

    return (
        <div className=" container mt-2">
            <h1> RealExampleRef</h1>

            <hr/>

           { show && <MultipleCustomHooks /> }

           <button 
            onClick={ handleClick }
            className="btn btn-info text-white mt-2">
               Show / Hide
           </button>
        </div>
    )
}
