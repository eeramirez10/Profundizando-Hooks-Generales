import React from 'react'

export const TodoListItem = ({ todo, index, hadleToggle, handleDelete, handleEditButton }) => {
    return (
        <>

            <li key = { todo.id }
                className="list-group-item"
            >

                <p
                    className={todo.done ? "complete" : undefined}

                    onClick={() => hadleToggle(todo.id)}
                >

                    {index + 1}. {todo.desc}

                    <button

                        className="btn btn-sm btn-danger mx-3"
                        onClick={() => handleDelete(todo.id)}
                    >
                        Borrar
                    </button>

                    <button

                        className="btn btn-sm btn-warning "
                        onClick={() => handleEditButton({ id: todo.id, desc:todo.desc })}
                    >
                        Editar
                    </button>

                </p>

            </li>

        </>
    )
}
