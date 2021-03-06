import React,{useState} from 'react';
import TodoItem from './TodoItem'

function TodoList({todos,onToggle}){
    return (
        <ul>
             {todos.map((todo)=> <TodoItem key={todo.id} onToggle={onToggle} todo={todo}></TodoItem>)}
        </ul>
    ) 

}


export default React.memo(TodoList);