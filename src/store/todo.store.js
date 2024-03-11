import { Todo } from "../todos/models/todo.model"

const Filters = {
    All: 'all',
    completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedad del alma'),
        new Todo('Piedad del infinito'),
        new Todo('Piedad del tiempo'),
        new Todo('Piedad del poder'),
        new Todo('Piedad del realidad')
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {
    
    switch( filter ){
        case Filters.all:
            return [...state.todos];
        case Filters.completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error(`Option ${ filter } is not valid.`);
}
}

const addTodo = ( description ) => {
    
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId );
}

const deleteCompleted = ()  => {
    state.todos = state.todos.filter(todo => todo => todo.done );
}

/**
 * 
 * @param { Filters } newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}




export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    getTodos
}