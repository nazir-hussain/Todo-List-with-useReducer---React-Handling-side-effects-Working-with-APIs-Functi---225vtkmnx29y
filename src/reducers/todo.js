// const todoReducer = (state, action) => {
//     switch (action.type) {
//         case "Add":
//             return{
//                 state:[...state,{text : action.text}]
//             }
//         case "Delete":
//             return{
//                 state: state.filter((cur,ind)=>ind!==id)
//             }
//     }
// }

// export { todoReducer }





// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD": {
//       return {
//         todos: [
//           ...state.todos,
//           {
//             title: action.value,
//             id:
//               new Date().toLocaleDateString() +
//               "" +
//               new Date().toLocaleTimeString(),
//           },
//         ],
//       };
//     }
//     case "DELETE": {
//       return {
//         todos: action.data,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export { todoReducer };







const todoReducer = (state, action) => {
    switch (action.type) {
        case 'addTodo': {
            
            return [...state,{id: Date.now(), todo_name: action.payload, isDone: false}];
        }
        case 'done': {
            return state.map((todo)=>{
                if(todo.id===action.payload){
                    return {...todo , isDone : !todo.isDone}
                }else{
                    return {...todo}
                }
            })
        }
        case 'delete': {
            console.log(state);
            return state.filter((todo)=>todo.id != action.payload);
        }
    }
}
export const ACTION = {
    ADD_TODO : 'addTodo',
    DONE : 'done',
    DELETE : 'delete'
}
export { todoReducer }
