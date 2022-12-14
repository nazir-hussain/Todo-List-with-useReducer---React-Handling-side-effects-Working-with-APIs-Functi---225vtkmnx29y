// import React, { useReducer } from 'react'
// import { todoReducer } from '../reducers/todo';
// import '../styles/App.css';
// import { AddTodo } from './AddTodo';
// import { Todo } from './Todo';
// const App = () => {
//   const [state,dispatch] = useReducer(todoReducer,{/* Initial todo state array, could be an array for storing indivial todo objects */})
  
 
//   return (
//     <div id="main">
//       <AddTodo />
//      {/* Render list of Todo Components here */}
//     </div>
//   )
// }


// export default App;





// import React, { useReducer } from "react";
// import { todoReducer } from "../reducers/todo";
// import "../styles/App.css";
// import { AddTodo } from "./AddTodo";
// import Navbar from "./Navbar";
// import { Todo } from "./Todo";
// const App = () => {
//   const [state, dispatch] = useReducer(todoReducer, {
//     /* Initial todo state array, could be an array for storing indivial todo objects */
//     todos: [],
//   });
//   return (
//     <div id="main">
//       <Navbar />
//       <AddTodo state={state} dispatch={dispatch} />
//       {/* Render list of Todo Components here */}
//     </div>
//   );
// };
// export default App;





import React, { useReducer } from 'react'
import { todoReducer, ACTION } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,[])
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch}/>
      <Todo data={state} handleBtn={dispatch} />  
    </div>
  )
}


export default App;
