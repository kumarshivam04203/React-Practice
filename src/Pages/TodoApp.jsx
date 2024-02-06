import React, { useState } from "react";
let globalId = 0
function TodoApp(){
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])

    function createTodo(e){
        e.preventDefault()
        setTodos(oldTodo => {
            setText('')
            return [...oldTodo, {todo:text, id: globalId++}]
        })
    }
    function removeTodo(itemId){
        setTodos(oldTodo => oldTodo.filter(item => item.id !== itemId))
    }
    return(
        <div>
            <h1>Todo app</h1>
            <form action="" onSubmit={createTodo}>
                <input type="text" placeholder="Enter todo" value={text} onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button type="submit">Add</button>


                <ul>
                    {
                        todos.map((item, index) => {
                            return <div key={item.id}>
                                <li>{item.todo}</li>
                                <button onClick={()=>removeTodo(item.id)}>X</button>
                            </div>
                        })
                    }
                </ul>
            </form>
        </div>
    )
}
export default TodoApp;