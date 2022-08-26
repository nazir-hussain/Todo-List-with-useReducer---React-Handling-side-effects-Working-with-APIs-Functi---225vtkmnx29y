// import React from "react";
// import "../styles/App.css";

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <div className="logo">Todo List</div>
//       <button className="theme">Theme</button>
//     </div>
//   );
// };

// export default Navbar;






import React from 'react';
import {ACTION} from '../reducers/todo';


export default function DisplayEach({value, handleBtn}) {
  return (
    <div>
        <div className="todo-title" style={value.isDone?{color:'grey'}:{}}>{value.todo_name}</div>
          <button className='todo-delete' onClick = {()=>handleBtn({type: ACTION.DELETE, payload: value.id})}>Delete</button>
    </div>
  )
}
