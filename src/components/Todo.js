// import React from 'react';
// const Todo = () => {
//     return (
//         <>
//         <h2 class="todo">Todo</h2>
//         {
//             state.map((cur)=>
//             <>
//             <div class="todo-title" key={id}>{cur}</div>
//             <button onClick={()=>dispatch({type:"delete"})}>del</button>
//             </>
//         }
       
//         </>
//     )
// }


// export { Todo }





// import React from "react";
// import "../styles/App.css";
// const Todo = ({ title, id, handleDelete }) => {
//   return (
//     <div className="todo">
//       <div className="todo-title">{title}</div>
//       <button className="todo-delete" onClick={() => handleDelete(id)}>
//         Delete
//       </button>
//     </div>
//   );
// };

// export { Todo };






import React from 'react';
import DisplayEach from './DisplayEach';
const Todo = (props) => {
    let i = 1;
    return (
        <div className="todo">
            {console.log(props.data)}
            {props.data.map((todo)=><DisplayEach key={i++} value={todo} handleBtn = {props.handleBtn} />)}
        </div>
    )
}


export { Todo }
