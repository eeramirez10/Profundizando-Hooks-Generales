import React, { useEffect, useReducer} from 'react'
import { todoReducer } from './todoReducer';

import './todApp.css'

import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useForm } from '../../hooks/useForm';



const init = () => JSON.parse(localStorage.getItem('todos')) || [];



export const TodoApp = () => {


    const [todos, dispacth] = useReducer( todoReducer, [], init );

    const [ { desc }, , , handleEdit, edit ] = useForm();
    
    

    
    useEffect(()=>{

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [ todos])



    const handleDelete = (todoId) =>{
        
        const action = { 
            type: 'delete',
            payload: todoId
        }

        dispacth( action );

    }

    const handleAddTodo = ( action ) =>{

        dispacth(  action )
    }

    const hadleToggle = ( todoId ) =>{

        dispacth({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleEditButton = ( todo ) =>{

        handleEdit( todo );

        console.log(desc)

    }





    return (
        <div className="container mt-3">

            <h1> TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">

                <div className="col-6">
                    {/* TodoList, todos */}

                    <TodoList  
                        todos = { todos }  
                        hadleToggle = { hadleToggle } 
                        handleDelete={ handleDelete } 
                        handleEditButton ={ handleEditButton } />

                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="card-body">

                            <TodoAdd 
                                handleAddTodo = { handleAddTodo }
                                handleEditButton = { handleEditButton }
                                desc={ desc }
                               
                            
                            />
                           
                        </div>
                    </div>



                </div>

            </div>



        </div>
    )
}
