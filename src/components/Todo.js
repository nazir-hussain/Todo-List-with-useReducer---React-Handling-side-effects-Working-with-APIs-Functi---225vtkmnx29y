import React from 'react';
const Todo = () => {
    return (
        <>
        <h2 class="todo">Todo</h2>
        {
            state.map((cur)=>
            <>
            <div class="todo-title" key={id}>{cur}</div>
            <button onClick={()=>dispatch({type:"delete"})}>del</button>
            </>
        }
       
        </>
    )
}


export { Todo }

