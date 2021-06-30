

import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state: counter, increment, decrement, reset } = useCounter(200);

    return (
        <div className='container'>
            <h1> Counter whit hook: {counter} </h1>
            <hr />

            <button
                className="btn btn-success mx-2"
                onClick={() => { increment() }}> + 1</button>
            <button
                className="btn btn-danger"
                onClick={() => { decrement() }}> - 1</button>
            <button
                className="btn btn-primary mx-2"
                onClick={() => { reset() }}> Reset </button>

        </div>
    )
}
