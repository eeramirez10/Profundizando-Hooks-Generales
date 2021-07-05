

export const todoReducer = ( state = [], { type, payload }) => {


    
    return   type === 'add'
    ? 
        [...state, payload]
    : 
        type === 'delete'
    ? 
        state.filter ( todo => todo.id !== payload)
    : 
        type === 'toggle'
    ? 
        state.map( todo =>      
                todo.id === payload
            ? ({ ...todo, done: !todo.done})
            : todo
        )
    :   type === 'edit'
    ?   state.map ( todo =>
            todo.id === payload.id
            ? ({ ...todo, desc: payload.desc}) 
            :   todo
        )
    : state

    

}
