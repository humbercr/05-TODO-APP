import html from './app.html?raw';
import todoStore from '../store/todo.store';


/**
 * 
 * @param {String} elementID 
 */

export const App = ( elementID) => {

    const displayTodos = () =>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        console.log(todos);

    }

    
// Cuando la función App() se llama
(() => {
const app = document.createElement('div');
app.innerHTML = html;
document.querySelector(elementID).append( app );
displayTodos();
})();



}