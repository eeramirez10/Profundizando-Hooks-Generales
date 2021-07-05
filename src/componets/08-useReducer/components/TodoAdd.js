import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo, desc:d }) => {

    const [ { desc }, handleInputChange, resetForm, handleEdit, edit ] = useForm();

    

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!desc) return;

        const newTodo = { 
            id: new Date().getTime(),
            desc,
            done: false
        }

        const action = { 
            type: 'add',
            payload: newTodo
        }

        handleAddTodo( action )

        

    }

  

    return (
        <>

            <h4> Agregar TODO </h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label

                        className="form-label"
                    >
                        Descripcion
                    </label>

                    <input
                        onChange={handleInputChange}
                        className="form-control"
                        type="Text"
                        name="desc"
                        placeholder="Aprender"
                        autoComplete="off"
                        value={desc || ''}


                    />

                </div>

                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-sm btn-success btn-block"
                    > Agregar </button>
                </div>

            </form>

        </>
    )
}
