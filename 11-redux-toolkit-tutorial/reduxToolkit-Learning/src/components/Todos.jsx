import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todos() {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
  return (
    <>
        <div>
            Todos
        </div>
        <div>
            {todos.map}
        </div>
    </>
  )
}

export default Todos