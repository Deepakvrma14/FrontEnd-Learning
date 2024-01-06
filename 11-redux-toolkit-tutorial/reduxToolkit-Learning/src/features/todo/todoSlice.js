import { createSlice } from "@reduxjs/toolkit";
import {nanoid } from "nanoid";

const initialState ={
    todos:[ { id: "1", title: "First Todo" }]
}
    
;
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);

        }
    }
});
export const {addTodo, removeTodo} = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer;
