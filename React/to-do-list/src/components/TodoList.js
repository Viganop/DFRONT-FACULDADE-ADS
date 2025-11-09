import React from 'react';
import TodoItem from "./TodoItem";

//componentes Todolist que recebe a lista de tarefas para executar

export default function TopdoList({todos, removeTask}){
    return (
        <ul sytle={sytles.list}>
           {todos.map((elem) =>(
            <TodoItem key={elem.id} todo={elem} removeTask={removeTask}/>
           ))}
        </ul>

    )
}

const sytles = {
    list:{
        listStyle:"none",
        padding: 0
    }
};
