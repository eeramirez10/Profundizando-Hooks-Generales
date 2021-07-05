
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {



    return action?.type === 'agregar' 
        ? [...state, action.payload] 
        : state;
}

let todos = todoReducer();

const newTodo = { id: 2, todo: 'Comprar carne', done: false }

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)