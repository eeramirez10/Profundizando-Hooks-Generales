
import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, hadleToggle, handleDelete, handleEditButton }) => {

    return (
        <>

            <ul className="list-group list-group-flush ">
                {
                    todos.map((todo, i) =>

                        <TodoListItem
                            key= { todo.id }
                            index={i}
                            todo={todo}
                            hadleToggle ={ hadleToggle }
                            handleDelete = { handleDelete }
                            handleEditButton = { handleEditButton }
                        />

                    )
                }

            </ul>

        </>
    )
}
