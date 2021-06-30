import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { data, loading, error } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    // let { author, quote } = data ? data[0] : { autor: null, quote: null};

    let { author, quote } = !!data && data[0]


    return (
        <div className="container mt-2">
            <h1> Breaking Bad Quotes </h1>
            <hr />

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            <div className="spinner-border"></div>
                        </div>
                    )

                    :

                    (
                        <>

                            <blockquote className="blockquote text-end">
                                <p> {quote} </p>
                                <footer className="blockquote-footer"> {author} </footer>
                            </blockquote>


                            <button
                                onClick={increment}
                                className="btn btn-primary"
                            >
                                Siguiente quote
                            </button>
                        </>

                    )
            }




        </div>
    )
}
