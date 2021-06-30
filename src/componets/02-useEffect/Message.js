import React, { useState, useEffect } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({ x:0,y:0 })

    const { x, y } = coordenadas;

    useEffect(() => {

        const mouseMove = ({ x, y }) =>{

            setCoordenadas({  x, y})
            console.log(':D')
        }

        

        window.addEventListener('mousemove', mouseMove)

        return () => {

            window.removeEventListener('mousemove', mouseMove)

        }
    }, [])

    return (
        <>
            <h3>Eres Genial</h3>

            <p > X: { x } </p>
            <p> Y: { y } </p>
            

        </>
    )
}
