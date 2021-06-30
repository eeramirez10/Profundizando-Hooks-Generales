import React from 'react'

export const Small = React.memo(( { counter }  ) => {

    console.log(' Me volvi allamar :(')

    return (
       
        <small> { counter } </small>
    )
})
