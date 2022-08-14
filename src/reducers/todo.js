const todoReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return{
                state:[...state,{text : action.text}]
            }
        case "Delete":
            return{
                state: state.filter((cur,ind)=>ind!==id)
            }
    }
}

export { todoReducer }
