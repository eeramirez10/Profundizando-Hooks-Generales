import { useRef } from "react"


export const FocusScreen = () =>{

    const inputrRef = useRef();

    const handleClick = () => {
        inputrRef.current.select()
    } 

    return (
        <div className="container mt-4">
            <h1> Focus Screen </h1>
            <hr/>
            <input 
                ref={ inputrRef }
                className="form-control"
                placeholder="Tu nombre"  
            /> 

            <button
                onClick={ handleClick }
                className="btn btn-outline-primary mt-2" 
            >
                Focus
            </button>
        </div>
    )
}