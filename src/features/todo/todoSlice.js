// step 2:
import { createSlice, nanoid } from "@reduxjs/toolkit";


// step 3:
// -- default value, initial state can be empty, array, object...
const initialState = {
    todos: [{ id: '0', text: 'hello world' }]
}


// step 4:
// -- slice is a upgraded version of reducer, almost same as reducer
export const todoSlice = createSlice({

    // -- properties naming are of redux toolkit
    name: 'todos',

    // -- every slice has a initial state
    initialState,

    // -- reducers are functions that return a new state
    reducers: {
        // -- reducer have properties and methods
        greeting: sayHello,

        // this is syntax, just like useState,useEffect
        addTodo: (state, action) => {

            // creating a todo
            const todo = {
                id: nanoid(),
                text: action.payload,
            }

            // -- adding todo to state
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        }
    }

})


// -- later will use these methods in components to update state 
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// -- store need to know of all reducers
export default todoSlice.reducer;


// example of a function to use in reducer
const sayHello = (state, action) => {
    console.log(`hi there!`);
};


// -- nanoid generates a unique id